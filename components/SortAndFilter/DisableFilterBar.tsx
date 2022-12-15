import React from 'react'
import useProducts from '../../hooks/useProducts'
import { customScrollTo } from '../../lib/utils'


const DisableFilterBar = () => {

    const { selectCategory, selectedCategory } = useProducts()
    const handleClick = () => {
      customScrollTo(0)
      selectCategory(null)
    }

  return (
    selectedCategory ? <div className="z-10 left-0 bottom-0 w-full justify-center items-center">
      <div className="bg-white rounded-full px-1 py-1 flex gap-3 w-fit mx-auto items-center">
        <p className="ml-2">{`currently showing ${selectedCategory}`}</p>
        <button onClick={handleClick} className=" bg-blue-500 hover:scale-105 transition-all px-2 rounded-full text-white">show all items</button>
      </div>
    </div> : null
  )
}

export default DisableFilterBar