import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const useCart = () => {
    const cartProps = useContext(CartContext)
    return {...cartProps, cartLength: cartProps.cart.length}
}

export default useCart