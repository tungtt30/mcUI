import React from 'react'
import MainMenu from '../components/MainMenu'
import Player from '../components/Player'
import SideBar from '../components/SideBar'
import UploadPage from './UploadPage'

const MainPage = () => {


    return (
        <div className='flex'>
            <UploadPage />
            <SideBar />
            <MainMenu />
            <Player />
        </div>
    )
}

export default MainPage