import React, { useState } from 'react'
import MainMenu from '../components/MainMenu'
import Player from '../components/Player'
import SideBar from '../components/SideBar'
import UploadPage from './UploadPage'

const MainPage = () => {

    const [show, setShow] = useState('hidden')

    return (
        <div className='flex'>
            <UploadPage show={show} setShow={setShow} />
            <SideBar setShow={setShow} />
            <MainMenu />
            <Player />
        </div>
    )
}

export default MainPage