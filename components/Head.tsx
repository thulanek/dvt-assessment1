import React, { ReactNode } from 'react'
import Head from 'next/head'

interface HeadProps {
    title?: string
    description?: string
    children?: ReactNode
}
// THIS COMPONENT ALLOWS US TO EASILY DEFINE SEO VALUES FOR EACH PAGE
const HeadComp = ({ title, description }: HeadProps) => {
  return (
    <Head>
        <title>{ title ?? "Super Store"}</title>
        <meta name="description" content={ description ?? "Thulane's demo assessment." } />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadComp 