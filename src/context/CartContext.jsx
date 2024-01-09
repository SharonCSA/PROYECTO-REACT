// CartContext.jsx
import React, { createContext, useContext, useReducer } from "react";

// Definir el estado inicial del carrito
const initialState = {
  cartItems: [],
};

// Crear el contexto
const CartContext = createContext(); // Crea el contexto del carrito

// Definir tipos de acciones
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// Crear el proveedor del contexto
const CartProvider = ({ children }) => {
  // Definir el reducer para manejar las acciones del carrito
  const cartReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        // Verificar si el producto ya está en el carrito
        const existingProduct = state.cartItems.find(item => item.id === action.payload.id);

        if (existingProduct) {
          // Si el producto ya está en el carrito, no hacer nada
          return state;
        } else {
          // Agregar el nuevo producto al carrito con cantidad 1
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }

      case REMOVE_FROM_CART:
        // Eliminar el producto del carrito
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };

      case CLEAR_CART:
        // Limpiar el carrito
        return {
          ...state,
          cartItems: [],
        };

      default:
        return state;
    }
  };

  // Configurar el estado y el dispatch con useReducer
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Definir las acciones del carrito que estarán disponibles para los componentes
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Devolver el proveedor y el contexto para envolver la aplicación
  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Crear un gancho personalizado para acceder al contexto
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export { CartProvider, useCart };

