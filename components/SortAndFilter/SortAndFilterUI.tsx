import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { SortAndFilterItemsProps } from '.'
import SideButton from './SideButton'
import SortAndFilterItems from './SortAndFilterItems'

type SortAndFilterUIProps = {
    openLeftOptions: () => void
    openRightOptions: () => void
    close: () => void
    sortAndFilterProps: SortAndFilterItemsProps 
}

const SortAndFilterUI: FC<SortAndFilterUIProps> = ({ openLeftOptions, openRightOptions, close, sortAndFilterProps }) => {
    
    const { open, side, items } = sortAndFilterProps

  return (
    <div className="relative z-20">

        { open ? (
            <div className='fixed inset-0 w-screen h-screen flex items-center'>
                <motion.div
                onClick={close}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full backdrop-blur-xl" />

                <SortAndFilterItems items={items} side={side} close={close} />
            
            </div>
        ) : (
            <div className='fixed inset-0 h-full w-2 flex items-center'>
                    <SideButton clickHandler={openLeftOptions} index={0} text="CATEGORIES" />
                    <SideButton clickHandler={openRightOptions} index={1} text="SORT BY" />
            </div>
        )

        }
    </div>
  )
}

export default SortAndFilterUI