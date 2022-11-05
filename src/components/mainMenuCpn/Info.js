import React from 'react'
import { useSelector } from 'react-redux'

const Info = () => {

    const selector = useSelector(state => state.currentSong)

    return (
        <div className='flex items-center text-white  relative pb-5'>
            <div className='space-y-1 z-10'>
                <div className='text-3xl'>
                    {selector.name}
                </div>
                <div className='text-base'>
                    {selector.singer}
                </div>
                <div className='flex items-center space-x-5'>
                    <div className={`px-5 py-1 animate-pulse h-10 bg-purple-800 rounded-md flex items-center justify-center text-xl hover:bg-purple-500 cursor-pointer transition-all`}>
                        Playing...
                    </div>
                    <div className='flex items-center justify-center text-xl text-rose-600 border-purple-100 border-2 rounded-full p-2 hover:text-rose-500 cursor-pointer transition-all hover:border-purple-300'>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info