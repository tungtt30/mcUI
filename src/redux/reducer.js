
import data from '../fakedata/data.json'
import image from '../assets/avt.jpg'

const fakeInitState = data
const initState = {
    currentSong: {
        name: 'Music',
        singer: 'Various Artis',
        url: '',
        image: image,
    },
    isPlaying: false,
    playList: fakeInitState
}


const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'SET_SONG':
            return {
                ...state,
                currentSong: action.payload,
                isPlaying: true
            }

        case 'SET_PLAYLIST':
            return {
                ...state,
                playList: action.payload
            }


        default:
            return state
    }

}

export default rootReducer