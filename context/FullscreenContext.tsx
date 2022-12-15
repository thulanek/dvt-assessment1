import { createContext, Dispatch, SetStateAction, useState } from "react";

interface FullscreenProps {
    isFullscreen: boolean
    setIsFullscreen:  Dispatch<SetStateAction<boolean>>
}

export const FullscreenContext = createContext<FullscreenProps>({
    isFullscreen: false,
    setIsFullscreen: () => {}
})

const FullscreenContextProvider = ({ children }: {children: React.ReactNode}) => {

    const [isFullscreen, setIsFullscreen] = useState(false)

    return (
        <FullscreenContext.Provider value={{isFullscreen, setIsFullscreen}}>
            {children}
        </FullscreenContext.Provider>
    )
}

export default FullscreenContextProvider