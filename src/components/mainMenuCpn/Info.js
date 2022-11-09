import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglePlaying } from '../../redux/action'

const Info = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const handlePlay = () => {
        dispatch(togglePlaying())
    }

    return (
        <div className='flex items-center text-white  relative pb-5'>
            <div className='space-y-1 z-10'>
                <div className='text-3xl'>
                    {selector.currentSong.name}
                </div>
                <div className='text-base'>
                    {selector.currentSong.singer}
                </div>
                <div className='flex items-center space-x-5'>
                    <div onClick={handlePlay} className={`px-5 py-1 ${selector.isPlaying ? 'animate-pulse' : ''} h-10 w-28 bg-purple-800 rounded-md flex items-center justify-center text-xl hover:bg-purple-500 cursor-pointer transition-all`}>
                        {selector.isPlaying ? 'Playing...' : 'Play'}
                    </div>
                    <div className='flex items-center  justify-center text-xl text-rose-600 border-purple-100 border-2 rounded-full p-2 hover:text-rose-500 cursor-pointer transition-all hover:border-purple-300'>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info