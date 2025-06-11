import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

const STORAGE_KEY = "cartState";

const getInitialCart = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored
    ? JSON.parse(stored)
    : {
        cart: [],
        totalQuantity: 0,
        totalPrice: 0,
        discount: 0,
      };
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case "REMOVE_FROM_CART": {
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload
      );

      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      const removedTotal = itemToRemove.price * itemToRemove.quantity;

      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity - itemToRemove.quantity,
        totalPrice: state.totalPrice - removedTotal,
      };
    }
    case "INCREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      const item = state.cart.find((item) => item.id === action.payload);

      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + item.price,
      };
    }
    case "DECREASE_QUANTITY": {
      const item = state.cart.find((item) => item.id === action.payload);
      if (!item || item.quantity === 1) return state;

      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - item.price,
      };
    }

    case "APPLY_DISCOUNT": {
      return {
        ...state,
        discount: Math.round(state.totalPrice * action.payload),
      };
    }

    case "CLEAR_CART": {
      return {
        cart: [],
        totalQuantity: 0,
        totalPrice: 0,
        discount: 0,
      };
    }

    default:
      return state;
  }
}

//====create context====
const CartContext = createContext();

//==== context provider====
export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, getInitialCart());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  //==== actions====

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const increaseQuantity = (id) =>
    dispatch({ type: "INCREASE_QUANTITY", payload: id });

  const decreaseQuantity = (id) =>
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const applyDiscount = (percent) =>
    dispatch({ type: "APPLY_DISCOUNT", payload: percent });
  const finalPrice = state.totalPrice - state.discount;

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalPrice: state.totalPrice,
        totalQuantity: state.totalQuantity,
        discount: state.discount,
        finalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        applyDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// custom hook
export const useCart = () => useContext(CartContext);
