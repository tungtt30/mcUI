import React from 'react'
import MainMenu from '../components/MainMenu'
import Player from '../components/Player'
import SideBar from '../components/SideBar'

const MainPage = () => {

    return (
        <div className='flex'>
            <SideBar />
            <MainMenu />
            <Player />
        </div>
    )
}

export default MainPage