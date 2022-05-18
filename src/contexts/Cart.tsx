import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Product } from '../types/product';

type CartProviderProps = {
  children: React.ReactNode;
};

export type CartItem = Pick<
  Product,
  'id' | 'title' | 'price' | 'image' | 'image'
> & {
  quantity: number;
};

export type CartContextData = {
  items: CartItem[];
  addToCart(product: Pick<Product, 'id' | 'title' | 'price' | 'image'>): void;
  updateAmount(id: number, amount: number): void;
  removeFromCart(id: number): void;
  clearCart(): void;
};

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = async () => {
      const cart = await AsyncStorage.getItem('@GoMarketplace:cart');
      // console.log('loading cart', cart);
      if (cart) {
        setItems(JSON.parse(cart));
      }
    };

    loadCart();
  }, []);

  const saveOnLocalStorage = useCallback(async () => {
    console.log('saving on local storage');
    await AsyncStorage.setItem('@GoMarketplace:cart', JSON.stringify(items));
    const cart = await AsyncStorage.getItem('@GoMarketplace:cart');
    console.log('loading cart', cart);
  }, [items]);

  useEffect(() => {
    saveOnLocalStorage();
  }, [saveOnLocalStorage]);

  const addToCart = useCallback(
    async (product: Pick<Product, 'id' | 'title' | 'price' | 'image'>) => {
      setItems(oldItems => {
        const newData = [...oldItems];

        const productIndex = oldItems.findIndex(item => item.id === product.id);

        if (productIndex >= 0) {
          newData[productIndex].quantity += 1;
        } else {
          newData.push({ ...product, quantity: 1 });
        }

        return newData;
      });
    },
    [],
  );

  const updateAmount = useCallback((id: number, amount: number) => {
    setItems(oldItems => {
      const newData = [...oldItems];

      const productIndex = oldItems.findIndex(item => item.id === id);

      if (productIndex >= 0) {
        newData[productIndex].quantity = amount;
      }

      return newData;
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setItems(oldItems => {
      const newData = [...oldItems];

      const productIndex = oldItems.findIndex(item => item.id === productId);

      if (productIndex >= 0) {
        newData.splice(productIndex, 1);
      }

      return newData;
    });
  }, []);

  const clearCart = useCallback(async () => {
    setItems([]);

    await AsyncStorage.removeItem('@GoMarketplace:cart');
  }, []);

  const dialogContextData = useMemo(() => {
    return {
      items,
      addToCart,
      updateAmount,
      removeFromCart,
      clearCart,
    };
  }, [items, addToCart, updateAmount, removeFromCart, clearCart]);

  return (
    <CartContext.Provider value={dialogContextData}>
      {children}
    </CartContext.Provider>
  );
}
