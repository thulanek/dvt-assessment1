import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../lib/types";


interface CartContextProps {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    itemInCart: (id: number) => boolean
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)

const CartContextProvider = ({ children }: {children: ReactNode}) => {
    const cartName = "cart"
    const [cart, setCart] = useState<Product[]>([])
    
    useEffect(() => {
        const cartFromLocalStorage = (localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : []) as Product[]
        if(cartFromLocalStorage.length) setCart(cartFromLocalStorage)
    }, [])

    const addToCart = (product: Product) => {
        setCart(prev => {
            const newCart = [...prev, product]
            localStorage.setItem(cartName, JSON.stringify(newCart))
            return newCart
        })
    }

    const removeFromCart = (productId: number) => {
        setCart(prev => {
            const newCart = prev.filter(product => product.id !== productId)
            localStorage.setItem(cartName, JSON.stringify(newCart))
            return newCart
        })
    }

    const itemInCart = (id: number) => {
        console.log(cart)
        return cart.map(product => product.id).includes(id)
    }

    return (<CartContext.Provider value={{cart, addToCart, removeFromCart, itemInCart}}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider