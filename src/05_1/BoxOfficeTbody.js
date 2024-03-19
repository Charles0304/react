import React from 'react'
import BoxOfficeData from './BoxOffice.json';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function BoxOfficeTbody() {
    const [descStr, setDesc] = useState('자세한 정보는 이름을 클릭하세요');

    useEffect(() => {
        const foot = document.querySelector("tfoot>tr>td");
        foot.innerHTML = descStr;
    }, [descStr]);

    function handleDesc(item) {
        const descStr1 = `${item.movieNm}<br>개봉일 : ${item.openDt} 점유율 : ${item.salesShare}%`;
        setDesc(descStr1);
    }
    const rows = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(item =>

        <tr className='text-center border hover:font-bold hover:bg-amber-100'>
            <td className='bg-lime-200 h-10 w-10'>{item.rank}</td>
            <td className="hover:cursor-pointer" onClick={() => handleDesc(item)}>{item.movieNm}</td>
            <td>{parseInt(item.salesAcc).toLocaleString('ko-KR')}</td>
            <td>{parseInt(item.audiAcc).toLocaleString('Ko-KR')}</td>
            <td className={`flex items-center justify-center ${parseInt(item.rankInten) > 0 ? 'text-blue-600' : parseInt(item.rankInten) < 0 ? 'text-red-600' : ''
                }`}>
                {parseInt(item.rankInten) !== 0 ? (
                    <>
                        {Math.abs(parseInt(item.rankInten))} {parseInt(item.rankInten) > 0 ? <FaArrowUp /> : <FaArrowDown />}
                    </>
                ) : '-'}
            </td>

        </tr>
    );
    return (
        <tbody>
            {rows}
        </tbody>
    )
}
