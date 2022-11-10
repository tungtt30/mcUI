import React from 'react'
import avt from '../../assets/avt.jpg'

const TopSearch = () => {
    return (
        <div className='flex w-full text-white justify-between mt-4 space-x-10'>
            <div className='border border-purple-700 rounded-lg flex items-center ml-52 ' >
                <input className='bg-transparent w-96 h-5 outline-none leading-4 pb-1 pl-2' placeholder='Search' />
                <i className="fa-brands fa-searchengin mr-5 hover:text-orange-500 cursor-pointer text-xl transition-all"></i>
            </div>

            <div className='flex justify-between text-lg text-white items-center space-x-4 '>
                <div className='hover:text-orange-500 cursor-pointer transition-all '>
                    <i className="fa-solid fa-gear"></i>
                </div>
                <div className='hover:text-orange-500 cursor-pointer transition-all '>
                    <i className="fa-regular fa-bell"></i>
                </div>
                <div className='flex items-center border-purple-600 border-2 rounded-3xl px-2 py-1 space-x-4 hover:scale-105 hover:border-rose-400 transition-all cursor-pointer text-base ml-7'>
                    <img className='h-7 w-auto rounded-3xl' alt='' src={avt} />
                    <span className='mb-1'>Nahida</span>
                </div>
            </div>
        </div>
    )
}

export default TopSearch