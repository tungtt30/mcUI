import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSong } from '../../redux/action'



const MidBar = () => {

    const listData = useSelector(state => state.playList)
    const dispatch = useDispatch()
    const [list, setList] = useState(listData.slice(0, 7))
    const [slide, setSlide] = useState(0)



    const handleClick = (item) => {
        dispatch(setSong(item))
    }

    const handleNext = () => {
        if (slide < listData.length) {
            setList(listData.slice(slide, slide + 7))
            setSlide(() => slide + 1)
        } else {
            setSlide(0)
        }
    }
    const handleBack = () => {
        if (slide >= 7) {
            setSlide(() => slide - 1)
            setList(listData.slice(slide, slide + 7))
        } else {
            setSlide(listData.length - 7)
        }

    }

    return (
        <div className=' text-white bg-slate-900 p-1 rounded-xl '>
            <div className='flex justify-between ml-7'>
                <div>Weekly top tracks</div>
                <div className='flex space-x-2 p-1'>
                    <i onClick={handleBack} className="fa-solid fa-arrow-left hover:text-orange-600 p-1 rounded-md hover:scale-105 cursor-pointer transition-all"></i>
                    <i onClick={handleNext} className="fa-solid fa-arrow-right hover:text-orange-600 p-1 rounded-md hover:scale-105 cursor-pointer transition-all"></i>
                </div>
            </div>
            <div className='flex space-x-10 mx-4 justify-around pb-5'>
                {
                    list.map((item, index) => (
                        <div key={index} onClick={() => handleClick(item)} className="hover:scale-105 hover:text-orange-500 cursor-pointer transition-all" >
                            <img src={item.image} alt='' className='h-20 w-32 rounded-lg' />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default MidBar