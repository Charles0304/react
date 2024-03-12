function MyClockTime(){
    const currentTime = new Date();
    return (
        <p>
            현재시각 : {currentTime.toLocaleTimeString()}
        </p>
    )
}

export default MyClockTime