import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the UserContext
export const UserContext = createContext();

// UserContextProvider component that provides the context value
export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null); // For user info
  const [cartItems, setCartItems] = useState([]); // For cart items

  // Fetch user info from localStorage on initial load
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo)); // Set userInfo from localStorage if available
    }
  }, []);

  // Function to add item to the cart
  const addItemToCart = (item, quantity) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update the quantity
      setCartItems(cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity } // Increment the quantity
          : cartItem
      ));
    } else {
      // If it's a new item, add it to the cart
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  // Function to get the total count of items in the cart
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0); // Sum the quantities of all items
  };

  // Function to update the userInfo and persist it in localStorage
  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo)); // Store userInfo in localStorage
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo: updateUserInfo, cartItems, addItemToCart, getCartCount }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to easily access context in other components
export const useUserContext = () => useContext(UserContext);
