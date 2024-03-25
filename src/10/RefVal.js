import TailButton from "../UI/TailButton"
import { useState,useEffect,useRef} from "react";
export default function RefVal() {
    let cnt = 0; //컴포넌트 변수
    const [stCnt, setStCnt] = useState(0); //state 변수
    const refCnt = useRef(0);

    const handleLocal=()=>{
        cnt = cnt + 1;
        console.log('cnt = ',cnt);
    }

    const handleState=()=>{
        setStCnt(stCnt+1);
    }

    const handleRef=()=>{
        refCnt.current=refCnt.current+1;
        console.log(refCnt)
    }

    useEffect(()=>{
        console.log("stCnt = ",stCnt)
    },[stCnt])

    return (
        <div className="w-11/12 grid grid-cols-3 gap-4 text-center">
            <div>
                컴포넌트 변수(지역변수) : {cnt}
            </div>
            <div>
                State 변수 : {stCnt}
            </div>
            <div>
                Ref 변수 : {refCnt.current}
            </div>
            <div>
                <TailButton caption = "컴포넌트 변수" color = "blue" handleClick={handleLocal}/>
            </div>
            <div>
                <TailButton caption = "State 변수" color = "blue" handleClick={handleState}/>
            </div>
            <div>
                <TailButton caption = "Ref 변수" color = "blue" handleClick={handleRef}/>
            </div>
        </div>
    )
}
