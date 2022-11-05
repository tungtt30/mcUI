

const timeFormat = (totalSeconds) => {

    if (totalSeconds === 0) return '00:00'

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    if (`${padTo2Digits(minutes)}:${padTo2Digits(seconds)}` === "NaN:NaN") {
        return '00:00'
    }
    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`

}


export default timeFormat


