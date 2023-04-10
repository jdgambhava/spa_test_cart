import { useMemo, createContext, useReducer, useCallback, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems:
            state.cartItems.findIndex((item) => item.id === payload.id) > -1
              ? [...state.cartItems].map((item) => {
                  return {
                    ...item,
                    quantity: item.id === payload.id ? item.quantity + 1 : item.quantity,
                    price:
                      item.price * (item.id === payload.id ? item.quantity + 1 : item.quantity),
                  };
                })
              : [...state.cartItems, { ...payload, quantity: 1 }],
        };
        break;
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: [...state.cartItems].filter((item) => item.id !== payload.id),
        };
        break;
      case 'UPDATE_QUANTITY':
        const updatedCartItems = [...state.cartItems].map((item) => {
          return item.id === payload.id
            ? {
                ...item,
                quantity: payload.add ? item.quantity + 1 : item.quantity - 1,
                price: item.price * (payload.add ? item.quantity + 1 : item.quantity - 1),
              }
            : { ...item };
        });
        return {
          ...state,
          cartItems: [...updatedCartItems],
        };
        break;

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  });

  useEffect(
    (_) => {
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    [state],
  );

  const addToCart = useCallback((item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item },
    });
  });

  const removeFromCart = useCallback((id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  });

  const updateQuantity = useCallback(({ id, add }) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, add },
    });
  });

  const contextValue = useMemo(
    (_) => {
      return { cartItems: state.cartItems, addToCart, removeFromCart, updateQuantity };
    },
    [state.cartItems],
  );
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
