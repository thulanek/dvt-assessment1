import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";
import { Product } from "../lib/types";


interface ProductsContextProps {
    products: Product[]
    setProducts: Dispatch<SetStateAction<Product[]>>
    selectCategory: (category: string | null) => void
    sortProductsBy: (sortByVal: SortValues) => void
    selectedCategory: string | null
    categories: string[]
}

type SortValues = "price highest" | "price lowest" | "rating" | "alphabet ascending" | "alphabet descending"

export const ProductsContext = createContext<ProductsContextProps>({} as ProductsContextProps)

const ProductsContextProvider = ({ children }: {children: ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([])
    const [sortBy, setSortBy] = useState<SortValues>("price highest")
    const [categoryToShow, setCategoryToShow] = useState<string | null>(null)

    // WE'RE USING useMemo TO AVOID RECALCULATING EACH OF THE ARRAYS IF IT'S DEPENDANCIES HAVEN'T CHANGED
    // CONVERTING TO SET THEN BACK TO ARRAY TO FILTER OUT UNUNIQUE VALUES
    const categories = Array.from(new Set(useMemo(() => products.map(product => product.category), [products])))

    const selectCategory = (category: string | null) => {
        // IF SELECTED CATEGORY IS NOT A VALID CATEGORY, RETURN
        if(category === null){
            setCategoryToShow(null)
            return
        }
        if(!categories.includes(category)) return
        setCategoryToShow(category)
    }

    const sortProductsBy = (sortByVal: SortValues) => setSortBy(sortByVal)

    const filteredProducts = useMemo(() => (
        !categoryToShow ? products : products.filter(product => product.category === categoryToShow)
    ), [categoryToShow, products])

    // WE'RE NOT MEMOISING THE SORTED PRODUCTS ARRAY BECAUSE THE IT WILL ALWAYS CHANGE
    // SO RUNNING THE DEPENDACNCY CHECK WOULD COST US PERFORMANCE RATHER THAN SAVE IT
    const sortedProducts = sortBy === "alphabet ascending" ? filteredProducts.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)) 
    : sortBy === "alphabet descending" ? filteredProducts.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))
    : sortBy === "price highest" ? filteredProducts.sort((a, b) => (a.price < b.price ? 1 : -1))
    : sortBy === "price lowest" ? filteredProducts.sort((a, b) => (a.price > b.price ? 1 : -1))
    : filteredProducts
    

    return (
        <ProductsContext.Provider value={{products: sortedProducts, setProducts, selectCategory, sortProductsBy, selectedCategory: categoryToShow, categories}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider