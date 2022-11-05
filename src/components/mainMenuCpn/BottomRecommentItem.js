import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSong } from '../../redux/action'

export const BottomRecommentItem = ({ item, index }) => {

    const dispatch = useDispatch()

    const [heart, setHeart] = useState('regular')

    const handleHeart = (e) => {
        heart === 'regular' ? setHeart('solid') : setHeart('regular')
    }
    const handleClick = () => {
        dispatch(setSong(item))
    }

    return (
        <div className='flex space-x-6 items-center justify-around m-3 p-1 cursor-pointer hover:text-orange-400 hover:bg-purple-900 rounded-lg transition-all' >
            <span className='w-4'>{index + 1}</span>
            <img src={item.image} alt='' className='h-10 w-10 rounded-md' onClick={handleClick} />
            <div className='w-24' onClick={handleClick}>
                <p className='text-xl'>{item.name}</p>
                <p className='text-sm'>{item.singer}</p>
            </div>
            <div className='space-x-3'>
                <span>34090</span>
                <i className="fa-solid fa-headphones"></i>
            </div>
            <div onClick={(e) => handleHeart(e)} className='text-rose-600 hover:scale-105 transition-all'>
                <i className={`fa-${heart} fa-heart`}></i>
            </div>
            <div className='text-white hover:scale-105 hover:text-orange-600 transition-all'>
                <i className="fa-solid fa-plus"></i>
            </div>
        </div>
    )
}
