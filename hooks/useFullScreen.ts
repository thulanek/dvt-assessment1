import { useContext } from "react";
import { FullscreenContext } from "../context/FullscreenContext";

const useFullScreen = () => {

    const { isFullscreen, setIsFullscreen } = useContext(FullscreenContext)

    const openFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            console.log("GOING FULL SCREEN")
            elem.requestFullscreen();
            setIsFullscreen(true)
        } else console.log("FULL SCREEN METHOD NOT AVAIL")
    }

    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            console.log("CLOSING FULL SCREEN")
            document.exitFullscreen();
            setIsFullscreen(false)
        } else console.log("FULL SCREEN NOT AVAIL")
      }

      const toggleFullscreen = () => {
        if(isFullscreen) closeFullscreen()
        else openFullscreen()
      }

    return {isFullscreen, toggleFullscreen}
}

export default useFullScreen