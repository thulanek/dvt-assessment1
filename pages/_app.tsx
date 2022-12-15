import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'
// import Footer from '../components/layout/Footer'
import FullscreenContextProvider from '../context/FullscreenContext';
import ProductsContextProvider from '../context/ProductsContext';
import CartContextProvider from '../context/CartContext';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;700&family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet"></link>
    {/* BODY HEIGHT CLASS SETS BODY HEIGHT MINIMUM (SCREEN HEIGHT - FOOTER HEIGHT)
    ENSURING THE FOOTER IS ALWAYS AT THE BOTTOM EVEN WHEN THE PAGE CONTENT DOESN'T FILL PAGE*/}
      <div className="body-height">
        <FullscreenContextProvider>
          <CartContextProvider>
              <Header />
              <ProductsContextProvider>
                  <Component {...pageProps} />
              </ProductsContextProvider>
          </CartContextProvider>
        </FullscreenContextProvider>
      </div>
      {/* <Footer /> */}
    </>
  )
}
