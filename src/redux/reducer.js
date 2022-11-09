
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
    playList: fakeInitState,
    uploadShow: 'hidden'
}


const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'SET_SONG':
            return {
                ...state,
                currentSong: action.payload,
                isPlaying: false
            }

        case 'SET_PLAYLIST':
            return {
                ...state,
                playList: action.payload
            }

        case 'TOGGLE_PLAY':
            return {
                ...state,
                isPlaying: !state.isPlaying
            }
        case 'TOGGLE_UPLOAD':
            return {
                ...state,
                uploadShow: action.payload
            }

        default:
            return state
    }

}

export default rootReducer