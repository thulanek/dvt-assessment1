import { FC } from "react"

interface SideButtonProps {
    text: string,
    index: 0 | 1,
    clickHandler: () => void
}

const SideButton: FC<SideButtonProps> = ({ text, index, clickHandler }) => {
    const classes = index === 0 ? "left-0 origin-bottom-left rotate-90 -ml-2" : "right-0 origin-bottom-right -rotate-90 -mr-2"
    
    return <button onClick={clickHandler} className={`fixed z-20 -mt-52 text-3xl ${classes}`}>{text}</button>
}

export default SideButton