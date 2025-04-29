'use client'

import { createContext, useState, useContext } from "react"

const cartcontext = createContext()
export const usecart = () => useContext(cartcontext)

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    
    const addtocart = (product) => {
        setCart((prev) => [...prev, product])

        const removeFromcart = (productId) => {
            setCart((prev) => prev.filter((item) => item.id !== productId))
        }

        return (
            <cartcontext.Provider value={{ cart, addtocart, removeFromcart }}>
                {children}
            </cartcontext.Provider>
        )


    
    }
}