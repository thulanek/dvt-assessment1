import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'
import useCart from '../hooks/useCart'
import { Product } from '../lib/types'
import { formatMoney } from '../lib/utils'

// TODO - ADD CART BUTTON
const Card: FC<Product & {index: number}> = (props) => {
  const { id, image, price, title, index } = props

  const { itemInCart, addToCart, removeFromCart } = useCart()

  const productInCart = itemInCart(id)

  const handleProductButtonClick = () => {
    if(itemInCart(id)) removeFromCart(id)
    else addToCart(props)
  }

  return (
  <div className="w-fit h-fit overflow-hidden">
      <motion.div 
      // initial={{ y: "60vh" }}
      // animate={{ y: 0 }}
      // exit={{ y: "60vh" }}
      // transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 + 0.1 * index }}
      className={`relative w-[110px] max-w-xs h-fit ${index % 2 === 0 ? "-mt-0" : "mt-0"}`}>
          <Image placeholder='blur' src={image} width={140} height={140} style={{ objectFit: "contain" }} alt="" className='object-contain w-[110px] h-[110px] bg-white' blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAAAXVBMVEX////c2fqbhtjq5+k7Ok/s7O/u7vD09PVgXm749/zl5Pji4eRpaHZ0c4JYV2fKys/DucLFwv+llJuWhuW1q/OYiKvy8f9tXsR5bfhuY7VNTF/e3ee3t77V1NhAPk9qy+hPAAAASUlEQVQI1yXLRwKAIAxE0QAhBGn2rvc/pkRm899mAADGHtpWPQ3+V7frWTUd22JqlQ8nsqu6iDJGkbM2I1uRIX6TfJ9yR04lwAdjgwKA+tkkogAAAABJRU5ErkJggg==' />

          <p className="text-[9px] font-semibold text-center mt-2">{title}</p>
          <p className="text-xs font-semibold text-center mt-2">{formatMoney(price, true)}</p>

          <button onClick={handleProductButtonClick} className={`w-full text-xs py-[2px] border border-black text-center mt-2 text-black rounded-full ${productInCart ? "opacity-30" : "opacity-100" }`}>{ productInCart ? "remove from cart" : "add to cart" }</button>

      </motion.div>
    </div>
  )
}

export default Card