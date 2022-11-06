import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSongSync } from "../redux/action";

const sideBarData = [
  {
    name: "Explore",
    icon: "fa-solid fa-house",
  },
  {
    name: "Genres",
    icon: "fa-solid fa-music",
  },
  {
    name: "Podcast",
    icon: "fa-solid fa-podcast",
  },
  {
    name: "Artistes",
    icon: "fa-solid fa-palette",
  },
];



const SideBar = () => {
  const [mainIcon, setMainIcon] = useState("fa-solid fa-music");
  const dispatch = useDispatch()

  const handleClick = (icon) => {
    setMainIcon(icon);
  };

  const handleSetSong = () => {
    dispatch(setSongSync())
  }



  return (
    <div className="h-screen w-1/6 bg-slate-900 ">

      <div className="text-white text-2xl flex justify-center items-center pt-5 pr-4 space-x-3 font-semibold">
        <div className="space-x-3 text-xl w-5">
          <i className={`${mainIcon}`} />
        </div>
        <span>MUSIC</span>
      </div>
      <div className="text-white flex-col space-y-5 mt-10 text-lg">
        {sideBarData.map((item) => (
          <div
            onClick={() => handleClick(item.icon)}
            key={item.name}
            className="pl-6 space-x-3 m-2 hover:text-orange-400 cursor-pointer transition-all"
          >
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </div>
        ))}
        <div
          onClick={handleSetSong}
          className="pl-6 space-x-3 m-2 hover:text-orange-400 cursor-pointer transition-all"
        >
          <i className="fa-solid fa-rotate"></i>
          <span>Sync</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
