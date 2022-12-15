import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { ComponentProps, useEffect } from 'react'
import useCart from '../../hooks/useCart'
import useFullScreen from '../../hooks/useFullScreen'
import { Route, routes } from '../../lib/routes'

type HeaderProps = {
    additionalClasses?: ComponentProps<"header">["className"]
}

type HeaderElement = {
  name: string,
} & ({ route: Route, clickHandler?: never } | { route?: never, clickHandler?: () => void })

// TODO - ADD CART BUTTON
const Header = ({ additionalClasses="" }: HeaderProps) => {

  const { isFullscreen, toggleFullscreen } = useFullScreen()

  const headerElements:HeaderElement[] = [
    { name: "home", route: routes.home },
    { name: "portfolio", route: routes.portfolio },
    { name: isFullscreen ? "close app mode" : "app mode" , clickHandler: toggleFullscreen }
  ]

  const { cartLength } = useCart()

  return (
    <header className={`flex fixed inset-0 top-0 w-screen h-[60px] justify-between px-6 py-2 ${additionalClasses}`}>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F4%2FNike-Logo-PNG-Pic-420x166.png&f=1&nofb=1&ipt=3f8db5b7d99bf498f6aebeb6febae8e3c312155033fd0251f6f6d0b6298b9d1d&ipo=images" alt="t-store home linking logo" className="w-[40px] mr-2 md:w-[80px] object-contain" />

        <div className="flex items-center gap-7">
          <button className='relative w-7 h-7'>
            <motion.p
            style={{ opacity: !cartLength ? 0 : 1 }}
            className="absolute -right-3 -top-2 text-white/80 font-bold bg-red-500 w-5 h-5 rounded-full flex justify-center items-center">{ cartLength }</motion.p>
            <img className='w-full h-full' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F128x128%2F2015%2F12%2F12%2F686440_tool_512x512.png&f=1&nofb=1&ipt=75fd035b8d7b2de25cd352557f413325a74bd035fc69c1c1a02628d27251ca12&ipo=images" alt="cart icon" />
          </button>

          <nav className="flex gap-4 items-center">
            {headerElements.map(({ name, route, clickHandler }) => route ?
              <Link href={route}>{ name }</Link>
              : 
              <button onClick={clickHandler} className="cursor-pointer bg-purple-600 text-white px-3 py-1 rounded-full">{ name }</button>
              )}
          </nav>
        </div>
    </header>
  )
}

export default Header