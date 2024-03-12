import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock(){
    return (
        <header className="App-header">
            <p>
                <MyClockImage/>
                <MyClockTime/>
            </p>
        </header>
    )
}

export default MyClock