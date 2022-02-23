import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(null);
    
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }