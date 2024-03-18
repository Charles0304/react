import React from 'react'
import { FaArrowUp,FaArrowDown } from "react-icons/fa";
import { useState,useEffect} from "react";


//순위 이름 매출 관객 증감율

export default function BoxOfficeRow({ rank, name, income, view, inc,data}) {
    const [descStr, setDesc] = useState('자세한 정보는 이름을 클릭하세요');
    
    useEffect(() => {
        const foot = document.querySelector("tfoot>tr>td");
        foot.innerHTML = descStr;
    }, [descStr]);

    function handleDesc() {
        const descStr1 = `${data.movieNm}<br>개봉일 : ${data.openDt} 점유율 : ${data.salesShare}%`;
        setDesc(descStr1);
    }
    return (
        <tr className='text-center border hover:font-bold hover:bg-amber-100'>
            <td className='bg-lime-200 h-10 w-10'>{rank}</td>
            <td className="hover:cursor-pointer" onClick={handleDesc}>{name}</td>
            <td>{parseInt(income).toLocaleString('ko-KR')}</td>
            <td>{parseInt(view).toLocaleString('Ko-KR')}</td>
            <td className={`flex items-center justify-center ${
                parseInt(inc) > 0 ? 'text-blue-600' : parseInt(inc) < 0 ? 'text-red-600' : ''
            }`}>
                {parseInt(inc) !== 0 ? (
                    <>
                        {Math.abs(parseInt(inc))} {parseInt(inc) > 0 ? <FaArrowUp /> : <FaArrowDown />}
                    </>
                ) : '-'}
            </td>
        </tr>
    )
    

}
