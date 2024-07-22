import React, { createContext, useReducer, useContext } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const defaultCartContext: CartContextType = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
};

const CartContext = createContext<CartContextType>(defaultCartContext);

const cartReducer = (state: CartItem[], action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item: CartItem) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (id: string) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
