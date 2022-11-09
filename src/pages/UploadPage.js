import axios from 'axios'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleUpload } from '../redux/action'

const UploadPage = (props, ref) => {

    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    const formRef = useRef()





    const handleClose = () => {
        dispatch(toggleUpload('hidden'))
    }



    const handleSubmit = async () => {
        try {
            const res = await axios({
                headers: { "Content-Type": "multipart/form-data" },
                method: 'post',
                url: 'https://upload-sv.herokuapp.com/api/song/post',
                data: formRef.current,
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={`absolute z-50  h-screen w-screen items-center justify-center ${selector.uploadShow} tpr-50 `} >
            <div className='h-auto w-2/6 bg-gradient-to-b from-purple-800 to-black text-white p-10 rounded-xl shadow-lg'>
                <div className='flex justify-center items-center text-2xl mb-6'>
                    <span>UPLOAD</span>
                </div>
                <form className='space-y-4' ref={formRef}>
                    <div className='space-x-8 flex justify-center items-center'>
                        <div className='w-20' htmlFor='songName'>Song</div>
                        <input className='w-52 rounded-lg bg-transparent outline-none p-1 border-2 border-purple-400' id='songName' type='text' name='name' />
                    </div>
                    <div className='space-x-8 flex justify-center items-center'>
                        <div className='w-20' htmlFor='singerName'>Singer</div>
                        <input className='w-52 rounded-lg bg-transparent outline-none p-1 border-2 border-purple-400' id='singerName' type='text' name='singer' />
                    </div>
                    <div className='space-x-8 flex justify-center items-center'>
                        <div className='w-20' htmlFor='songFile'>Song file</div>
                        <input className='hidden-select outline-none p-1 border-2 border-purple-400 w-52 bg-purple-900 rounded-lg cursor-pointer hover:bg-purple-900 transition-all' accept='audio/mpeg, audio/x-m4a' id='songFile' type='file' name='song' />
                    </div>
                    <div className='space-x-8 flex justify-center items-center'>
                        <div className='w-20' htmlFor='imageFile'>Image file</div>
                        <input className='hidden-select outline-none p-1 border-2 border-purple-400 w-52 bg-purple-900 rounded-lg cursor-pointer hover:bg-purple-900 transition-all' accept='image/jpg, image/png, image/jpeg' id='imageFile' type='file' name='image' />
                    </div>
                </form>
                <div className=' flex justify-center items-center space-x-4 mt-5'>
                    <button onClick={handleSubmit} className='w-24 h-12 rounded-lg text-white bg-purple-600 cursor-pointer hover:bg-purple-800 transition-all flex justify-center items-center'>Upload</button>
                    <button onClick={handleClose} className='w-24 h-12 rounded-lg text-white bg-rose-700 cursor-pointer hover:bg-rose-900 transition-all flex justify-center items-center'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default UploadPage