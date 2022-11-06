import React, { useEffect, useRef, useState } from 'react'
import './player.css'
import { useSelector } from 'react-redux'
import timeFormat from '../utils/timeFormat'

const Player = () => {

    const selector = useSelector(state => state)
    let song = selector.currentSong
    const songRef = useRef()
    const [playPause, setPlayPause] = useState('play')
    const [volume, setVolume] = useState(100)
    const [volumeIcon, setVolumeIcon] = useState('fa-solid fa-volume-high')
    const [repeat, setRepeat] = useState(false)
    const [duration, setDuration] = useState(0.001)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        if (selector.isPlaying) {
            setPlayPause('pause')
        } else {
            setPlayPause('play')
        }
    }, [song, selector.isPlaying])


    const handleVolume = (e) => {
        setVolume(e.target.value)
        songRef.current.volume = e.target.value / 100
        if (e.target.value <= 1) {
            setVolumeIcon('fa-solid fa-volume-xmark')
        } else if (e.target.value < 50) {
            setVolumeIcon('fa-solid fa-volume-low')
        } else {
            setVolumeIcon('fa-solid fa-volume-high')
        }
    }
    const handleMute = () => {
        if (volume !== 0) {
            setVolume(0)
            setVolumeIcon('fa-solid fa-volume-xmark')
            songRef.current.volume = 0
        } else {
            setVolume(100)
            setVolumeIcon('fa-solid fa-volume-high')
            songRef.current.volume = 1
        }
    }
    const togglePlay = async (check) => {
        if (check === 'play') {
            await songRef.current.play()
            setDuration(songRef.current.duration)
            setPlayPause('pause')
        } else {
            await songRef.current.pause()
            setPlayPause('play')
        }
    }

    const handleRepeat = () => {
        setRepeat(!repeat)
    }
    const handleEnded = async () => {
        if (repeat) {
            await togglePlay('play')
        } else {
            setPlayPause('play')
        }
    }
    const handleSeek = (e) => {
        setCurrentTime(e.target.value / 100 * duration)
        songRef.current.currentTime = e.target.value / 100 * duration
    }

    useEffect(() => {
        if (songRef.current.duration) {
            setDuration(songRef.current.duration)
        }
        const inte = setInterval(() => {
            setCurrentTime(songRef.current.currentTime)
        }, 1000)

        return () => clearInterval(inte)
    }, [currentTime])

    const handleNext = () => {

    }

    const handleBack = () => {

    }



    return (
        <div className='fixed w-10/12 h-24 player bottom-3 left-40 flex items-center justify-between'>


            <div className='flex space-x-3 ml-6 w-60'>
                <img src={song.image} alt='' className='object-cover h-16 w-16 border rounded-full ' />
                <div className='text-white p-2'>
                    <div className='text-xl'>{song.name}</div>
                    <div className='text-xs'>{song.singer}</div>
                </div>
            </div>


            <div className='flex justify-between space-x-5 text-white text-2xl items-center '>
                <i onClick={handleBack} className="fa-solid fa-backward-step hover:text-orange-600 cursor-pointer  transition-all"></i>
                <i onClick={() => togglePlay(playPause)} className={`fa-solid fa-${playPause} hover:text-orange-600 cursor-pointer w-5  transition-all`}></i>
                <i onClick={handleNext} className="fa-solid fa-forward-step hover:text-orange-600 cursor-pointer transition-all"></i>
                <i className={`fa-solid fa-repeat cursor-pointer text-xl ${repeat ? 'text-orange-600' : 'text-white'} transition-all`} onClick={handleRepeat}></i>
            </div>

            <div className='space-x-3 text-white flex items-center'>
                <span>{timeFormat(currentTime)}</span>
                <input type='range' className='progress cursor-pointer' value={currentTime / duration * 100} onChange={handleSeek} />
                <span>{timeFormat(duration)}</span>
            </div>

            <div className='space-x-3 text-white pr-4 flex items-center'>
                <i className={`${volumeIcon} hover:text-orange-600 cursor-pointer w-4 transition-all`} onClick={handleMute}></i>
                <input type='range' className='progress-volume cursor-pointer' value={volume} onInput={handleVolume} />
            </div>
            <div className='text-white flex items-center space-x-4 '>
                <i className="fa-solid fa-ellipsis-vertical hover:text-orange-600 cursor-pointer w-4 mr-5 transition-all"></i>
            </div>


            <audio src={song.url} ref={songRef} onEnded={handleEnded} autoPlay />
        </div >
    )
}

export default Player