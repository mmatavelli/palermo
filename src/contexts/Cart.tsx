/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { createContext, useCallback, useMemo, useState } from 'react';

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
};

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback(
    async (product: Pick<Product, 'id' | 'title' | 'price'>) => {
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
        newData[productIndex].quantity -= 1;
      }

      return newData;
    });
  }, []);

  const dialogContextData = useMemo(() => {
    return {
      items,
      addToCart,
      updateAmount,
      removeFromCart,
    };
  }, [items, addToCart, updateAmount, removeFromCart]);

  return (
    <CartContext.Provider value={dialogContextData}>
      {children}
    </CartContext.Provider>
  );
}
