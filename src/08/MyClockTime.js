import { useState, useEffect } from "react";

function MyClockTime() {
  const [currentTime, setCurrentTime] = useState();
  

  //컴포넌트 생성시 최초 1번
  useEffect(()=>{
    const t = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);
    
    return ()=>{clearInterval(t)}
  },[]);

  //tm이 바뀔때마다
  useEffect(()=>{
    console.log("[] => "+currentTime)
  },[currentTime])
  
  
  
  return (
    <h1 className="font-bold text-2xl">
      {currentTime && `현재시각 : ${currentTime.toLocaleTimeString()}`}
    </h1>
  )
}

export default MyClockTime;
