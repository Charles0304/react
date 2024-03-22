import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
    const [tdata,setTdata] = useState();
    const [c1, setC1] = useState();
    const[selC1,setSelC1] = useState();
    const [c2, setC2] = useState();
    const[selC2,setSelC2] = useState();
    const[detail,setDetail] = useState(); //상세정보
    const getDataFetch = (url)=>{
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>setTdata(data.data))
        .catch(err =>console.log(err))
    }

    useEffect(()=>{
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url = `${url}page=1&perPage=20&`
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`
    

        getDataFetch(url)
        
    },[]);

    useEffect(()=>{
        if(!tdata) return;
        let tmp = tdata.map(item=>item.사고유형_대분류)
        tmp = new Set(tmp)
        tmp = [...tmp]
        setC1(tmp)
    },[tdata]);

    useEffect(()=>{
        if(!tdata) return;
        if(!selC1) return;
        let tmp = tdata.filter(item=>item.사고유형_대분류===selC1).map(item=>item.사고유형_중분류)
        tmp = new Set(tmp)
        tmp = [...tmp]
        setC2(tmp)
        setDetail('')
    },[selC1]);

    useEffect(()=>{
        if(!tdata) return;
        let tmp = tdata.filter(item=>item.사고유형_대분류===selC1&&item.사고유형_중분류===selC2)
        
        tmp = tmp[0]
        tmp =<>
            <div className="border border-collapse items-center flex justify-center">경상자수 : {tmp.경상자수}</div>
            <div className="border border-collapse items-center flex justify-center">부상신고자수 : {tmp.부상신고자수}</div>
            <div className="border border-collapse items-center flex justify-center">사고건수 : {tmp.사고건수}</div>
            <div className="border border-collapse items-center flex justify-center">중상자수 : {tmp.중상자수}</div>
            <div className="border border-collapse items-center flex justify-center">사망자수 : {tmp.사망자수}</div>
         </> 
        setDetail(tmp)
    },[selC2])



    return (
    <div className="w-4/5 mt-4 h-full flex flex-col justify-start items-center">
        {c1&&<TrafficNav title="대분류" category={c1} sel={selC1} setSel={setSelC1}/>}
        
        {c2&&<TrafficNav title="중분류" category={c2} sel={selC2} setSel={setSelC2}/>}
        
        <div className="w-full mt-5 grid grid-cols-2 md:grid-cols-6 gap-4 sm:grid-cols-4">
            {detail}
        </div>
    
        
    </div>
  )
}
