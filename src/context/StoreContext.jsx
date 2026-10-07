import { createContext, useContext, useState } from 'react';
import { products } from '../data/mockData';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) return removeFromCart(productId);
    setCart(prev => prev.map(item => item.product.id === productId ? { ...item, quantity } : item));
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };
  
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <StoreContext.Provider value={{
      products,
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isInWishlist,
      cartTotal,
      clearCart: () => setCart([])
    }}>
      {children}
    </StoreContext.Provider>
  );
};
