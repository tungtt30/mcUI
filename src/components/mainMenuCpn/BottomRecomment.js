import React from 'react'
import { useSelector } from 'react-redux'
import { BottomRecommentItem } from './BottomRecommentItem'

const genres = [
    {
        name: 'jazz',
        color: 'bg-orange-900'
    }, {
        name: 'RnB',
        color: 'bg-red-900'
    }, {
        name: 'Rock',
        color: 'bg-purple-900'
    }, {
        name: 'Anime',
        color: 'bg-green-900'
    }, {
        name: 'EDM',
        color: 'bg-blue-900'
    }, {
        name: 'Pop',
        color: 'bg-amber-900'
    },

]

const BottomRecomment = () => {
    const playList = useSelector(state => state.playList)

    return (
        <div className='flex  mt-5 text-white space-x-10 '>
            <div className='w-3/5 bg-slate-900 p-4 rounded-xl'>
                <div className='flex justify-between items-center pb-1'>
                    <span className='text-xl ml-4'>Recommendation</span>
                    <span className='text-sm mr-4 hover:text-orange-400 transition-all cursor-pointer'>View all</span>
                </div>
                <div className='overflow-scroll scrollbar-hidden h-72'>
                    {
                        playList.map((item, index) => {
                            return <BottomRecommentItem key={index} item={item} index={index} />
                        })
                    }
                </div>
            </div>
            <div className='w-2/5 bg-slate-900 p-4 rounded-xl h-60'>
                <div className='flex justify-between items-center'>
                    <span className='text-xl ml-4 font-mono'>Genres</span>
                    <span className='text-sm mr-4 hover:text-orange-400 transition-all cursor-pointer'>View all</span>
                </div>
                <div className='grid grid-rows-2 grid-flow-col gap-5 bg-rose ml-6 mt-6'>
                    {
                        genres.map((item, index) => {
                            return (
                                <div key={index} className={`w-24 h-16 ${item.color} flex items-center justify-center rounded-lg hover:scale-105 transition-all cursor-pointer`}>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BottomRecomment