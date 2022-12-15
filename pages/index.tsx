import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import Card from '../components/Card'
import HeadComp from '../components/Head'
import HomeBanner from '../components/layout/HomeBanner'
import SortAndFilter from '../components/SortAndFilter'
import DisableFilterBar from '../components/SortAndFilter/DisableFilterBar'
import useProducts from '../hooks/useProducts'
import { Product } from '../lib/types'

interface HomeProps {
  fetchedProducts: Product[]
}

export default function Home({ fetchedProducts }: HomeProps) {

  const { setProducts, products } = useProducts()

  useEffect(() => {
    setProducts(fetchedProducts)
  }, [fetchedProducts])

  const productsArray = !products.length ? fetchedProducts : products  

  return (
    <div className="">
      <HeadComp title='Super Store - Home' description='Homepage for the Super Store' />

      <main className="snap-y snap-mandatory">
      <HomeBanner />
      <SortAndFilter />
      <div className="flex flex-col">

        {/* TODO - FIX SNAP FUNCTIONALITY */}
        <div className="snap-start h-[85vh] w-full"></div>
        <div className="snap-start h-screen min-h-screen bg-white w-screen relative z-10">
            <motion.div
            className="grid-display gap-32 items-start overflow-hidden p-6 w-11/12 mx-auto">
              { productsArray.map((product, index) => (
                <Card key={product.id} {...product} index={index} />
                )) }
              </motion.div>
              <DisableFilterBar />
        </div>
      </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ fetchedProducts: Product[] }> = async () => {

  const fetchedProducts = await (await fetch('https://fakestoreapi.com/products')).json() as Product[]

  return { props: { fetchedProducts }, revalidate: false }
}