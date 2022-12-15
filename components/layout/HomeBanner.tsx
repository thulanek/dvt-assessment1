import { motion, useScroll, useTransform } from 'framer-motion'
import React, { CSSProperties, FC } from 'react'

type HomeBannerProps = {}
type BannerTextProps = {
    text: string
    textAlign?: CSSProperties["textAlign"]
}

const BannerText = ({text, textAlign="initial"}: BannerTextProps) => {

    console.log(textAlign)

        return (
            <div className='p-1 overflow-hidden leading-[20vw]'>
                <motion.h1
                // initial={{ y: "60vw", scaleY: 7 }}
                // animate={{y: 0, scaleY: 1}}
                // transition={{ duration: 1, ease: "easeOut", delay: textAlign === "right" ? 0.35 : 0 }}
                style={{textAlign}}
                className={`text-[20vw] text-${textAlign}`}>{text}</motion.h1>
                
            </div>
        )
}

const HomeBanner: FC<HomeBannerProps> = () => {

    const bannerText = ["SUPER", "STORE"] as const

    // useScroll IS A VIEWPORT HOOK THAT PERFOMANTLY RETURNS THE VIEWPORT'S SCROLL DATA FOR ANIMATION USE 
    const { scrollY } = useScroll()
    // useTransform - WE'RE ALTERING THE SCROLLY VALUE TO CREATE VALUES FOR OUR OPACITY & SCALE ANIMATIONS
    const scaleX = useTransform(scrollY, val => val < 500 ? val * 0.1 + 1 : 500)
    const opacity = useTransform(scrollY, val => 1 - val * 0.005)

    console.log(scrollY)

  return (
    <motion.section
    style={{ scaleX, opacity }}
    className="fixed inset-0 top-[80px] w-[80vw] ml-[10vw] mx-auto">
        { bannerText.map((text, index) => (
            <BannerText key={text} text={text} textAlign={index === 1 ? "right" : "left"} />)
        )}
    </motion.section>
  )
}

export default HomeBanner