import { useContext } from 'react';

import { CartContext, CartContextData } from '../contexts/Cart';

export const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
