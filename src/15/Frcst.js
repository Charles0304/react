import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
import TailSelect from "../UI/TailSelect"
import getxy from "./getxy.json"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Frcst() {
    const navigator = useNavigate();
    const dRef = useRef();
    const sRef = useRef();
    const [x,setX] = useState();
    const [y,setY] = useState();

    const ops = getxy.map(item=>item["1단계"])
    const handleDate = ()=>{
        console.log(dRef.current.value)
    }

    const handleArea = ()=>{
        const tmp = getxy.filter(item=>item["1단계"]===sRef.current.value)[0]
        setX(tmp["격자 X"])
        setY(tmp["격자 Y"])
    }
    return (
        <div className="w-11/12 grid grid-cols-1 p-2 gap-2 items-center justify-center">
            <h1>단기예보 선택</h1>
            <div className="flex items-center justify-center">
                <TailInput type="date" inputRef={dRef} handleChange={handleDate} ph="날짜선택" />
                <TailSelect ops ={ops} opDefault='선택' selRef={sRef} handleChange = {handleArea} />
            </div>
            <div className="flex items-center justify-center">
                <TailButton caption="초단기예보" color="blue" handleClick={()=>{
                    navigator(`/ultra/${dRef.current.value.replacAll('-','')}/${sRef.current.value}/${x}/${y}`)}}/>
                <TailButton caption="단기예보" color="blue" handleClick={()=>{
                    navigator(`/vilage/${dRef.current.value.replacAll('-','')}/${sRef.current.value}/${x}/${y}`)}}/>
            </div>
        </div>
    )
}
