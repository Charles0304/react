
import bank from './img/bank.png'
import market from './img/market.png'
import busan from './img/busan.png'
import React, { useState } from 'react';


export default function FoodCard({fobj}) {
    const [isClick, setIsClick] = useState(false);
    const fimg = fobj.구분==="기초푸드뱅크"?bank:
        fobj.구분==="기초푸드마켓"?market:busan

        const handleIsClick=()=>{
            setIsClick(!isClick);
        }

    return (
        <div className='flex hover:cursor-pointer items-center w-11/12 justify-center border-2 p-3
        'onClick={handleIsClick}>
            <div className=' w-1/5 mr-3'>
                <img src={fimg} alt="img"/>
            </div>
            <div className='flex items-left justify-center flex-col  w-4/5'>
                <h1 className='text-2xl font-bold mb-2'>{fobj.사업장명}</h1>
                <p className='text-lg font-bold'>{fobj.운영주체명}</p>
                <p>{fobj['사업장 소재지']}</p>
                <div className='w-full truncate text-sm min-h-6 bg-slate-600 text-white mt-5 p-2'>{isClick && `Tel : ${fobj['연락처(대표번호)']} fax : ${fobj.팩스번호}`}</div>
            </div>

        </div>
    )
}
