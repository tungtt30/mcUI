import axios from "axios"



export const setSong = (payload) => {
    return {
        type: 'SET_SONG',
        payload
    }
}

export const setListSong = (payload) => {
    return {
        type: 'SET_PLAYLIST',
        payload
    }
}

export const setSongSync = (payload) => {
    return async function (dispatch) {
        return axios.get("https://whispering-coast-98518.herokuapp.com/api/song").then(data => dispatch(setListSong(data.data.song)))
    }
}