import React, { useRef, useState } from 'react'
import { finalWeb, finalMob } from '../constants'
import { isMobile } from 'react-device-detect'


const Intro = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPauseClick = () => {
        const video = videoRef.current
        if (isPlaying) {
            video.pause()
        } else {
            video.play()
        }
        setIsPlaying(!isPlaying)
    }
    return (
        <video
                className={isMobile ? `h-fit w-[100%]` : `w-screen h-fit`}
                src={isMobile ? finalMob : finalWeb}
                autoPlay={false}
                loop
                ref={videoRef}
                onClick={handlePlayPauseClick}
            />
    )
}

export default Intro
