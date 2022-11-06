import React from 'react'
import BottomRecomment from './mainMenuCpn/BottomRecomment'
import Info from './mainMenuCpn/Info'
import MidBar from './mainMenuCpn/MidBar'
import TopSearch from './mainMenuCpn/TopSearch'


const MainMenu = () => {


    return (
        <div className="h-screen w-full bg-gradient-to-b from-black to-purple-900 px-10 overflow-hidden">
            <TopSearch />
            <Info />
            <MidBar />
            <BottomRecomment />
        </div>
    )
}

export default MainMenu

