import logo from "../logo.svg"
import './Hello.css'
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';
export default function HelloCss() {
  const apikey = process.env.REACT_APP_MV_API;
  console.log(apikey);
  return (
    <div className="backGround">
        <img src = {logo} className="App-logo" alt="사진"></img>
        
        <HelloWhite></HelloWhite>
        <HelloYellow></HelloYellow>
    </div>
  )
}
