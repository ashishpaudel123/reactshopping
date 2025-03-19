import { createContext, useReducer } from "react";

let cartReducer = (state, action) => {
    switch (action.type) {
        case "addtocart": 
            return { ...state, cart: [...state.cart, action.payload] };
        case "remove": 
            return { ...state, cart: state.cart.filter(a => a.id !== action.payload.id) };
        case "addtofav": 
            return { ...state, favorites: [...state.favorites, action.payload] };
        case "removefav": 
            return { ...state, favorites: state.favorites.filter(a => a.id !== action.payload.id) };
        default:
            return state;
    }
};

let CartContext = createContext();
export let CartProvider = ({ children }) => {
    let [state, dispatch] = useReducer(cartReducer, { cart: [], favorites: [] });
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
