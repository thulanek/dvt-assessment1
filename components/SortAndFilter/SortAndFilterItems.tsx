import { motion, Variants } from 'framer-motion'
import React, { FC } from 'react'
import { SortOrFilterItems } from '../../lib/types'


type SortAndFilterItemsProps = {
    items: SortOrFilterItems
    side: "left" | "right"
    close: () => void
}

const SortAndFilterItems: FC<SortAndFilterItemsProps> = ({ items, side, close }) => {
    // VARIANTS ARE A WAY OF WRITING REPEATABLE ANIMATIONS FOR FRAMER MOTION COMPONENTS
    const slideInVariants: Variants = {
        initial:{x: "-500px", scaleX: 4 },
        animate:{x: 0, scaleX: 1},
        exit:{x: "-500px", scaleX: 4 },
    }

    const handleClick = (clickHandler: () => void) => {
        clickHandler()
        close()
    }

    const containerClasses = side === "left" ? "left-[20px]" : "right-[20px]" 
    const buttonClasses = side === "left" ? "text-left" : "text-right" 

  return (
    <motion.div 
    variants={slideInVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    className={`abdolute w-full z-10 flex flex-col gap-3 ${containerClasses}`}>
        {items.map(({name, handler}, index) => (
            <motion.button
            variants={slideInVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + 0.15 * index }}
            key={name} onClick={() => handleClick(handler)} className={`text-[40px] ${buttonClasses}`}>{ name }</motion.button>
        ))}
    </motion.div>
  )
}

export default SortAndFilterItems