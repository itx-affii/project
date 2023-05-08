import React, { useRef, useState } from 'react'
import { final } from '../constants'

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
        <div style={{ position: 'relative' }}>
            <video
                className='w-screen h-fit'
                src={final}
                autoPlay={false}
                loop
                ref={videoRef}
                onClick={handlePlayPauseClick}
            />
            {/* <button
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                }}
                onClick={handlePlayPauseClick}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button> */}
        </div>
    )
}

export default Intro
