import React, { useMemo, useState } from 'react'
import useProducts from '../../hooks/useProducts'
import { SortOrFilterItems } from '../../lib/types'
import { customScrollTo } from '../../lib/utils'
import SortAndFilterUI from './SortAndFilterUI'

export type SortAndFilterItemsProps = { 
    open: false
    side?: never
    items?: never
} | {
    open: true
    side: "left" | "right"
    items: SortOrFilterItems
}

const SortAndFilter = () => {
    const [sideBarProps, setSideBarProps] = useState<SortAndFilterItemsProps>({open: false})

    const { categories, selectCategory, products, sortProductsBy } = useProducts()

    const categoryOptions: SortOrFilterItems = useMemo(() =>
            [{name: "all", handler:() => selectCategory(null)} ,...categories.map(category => ({ name: category, handler: () => selectCategory(category) }))]
        ,[categories])

    const sortOptions = [
        {name: "lowest price", handler:() => sortProductsBy("price lowest")},
        {name: "highest price", handler:() => sortProductsBy("price highest")},
        {name: "best rating", handler:() => sortProductsBy("rating")},
        {name: "alphabetical", handler:() => sortProductsBy("alphabet ascending")},
    ]

    const openLeftOptions = () => {
        customScrollTo(0)
        setSideBarProps({open: true, items: categoryOptions, side:"left"})
    }
    const openRightOptions = () => {
        customScrollTo(0)
        setSideBarProps({open: true, items: sortOptions, side:"right"})
    }
    const close = () => setSideBarProps({open: false})

  return (
    <div className="">
        <SortAndFilterUI openLeftOptions={openLeftOptions} openRightOptions={openRightOptions} close={close} sortAndFilterProps={sideBarProps} />
    </div>
  )
}

export default SortAndFilter