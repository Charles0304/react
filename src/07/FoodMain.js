import fdata from './fooddata.json'
import FoodCard from './FoodCard'
import React, { useState } from 'react';
import TailButton from '../UI/TailButton';
export default function FoodMain() {
    const [cardList, setCardList] = new useState(fdata.map(item =>
        <FoodCard fobj={item} key={item.사업장명} />
    ))

    //버튼
    let c1 = fdata.map(item => item["운영주체 분류"].substring(2).trim());
    c1 = new Set(c1);
    c1 = [...c1]; //set -> array

    const c1Bts = c1.map(item =>
        <TailButton caption={item} key={item} handleClick={() => handleCard(item)} color='blue' />)
    //버튼끝
    
    function handleCard(citem) {
        console.log(citem)
        const tm = fdata.filter(item=>item['운영주체 분류'].substring(2).trim()===citem).map(item=><FoodCard fobj={item} key={item.사업장명} />)
        setCardList(tm)
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-start'>
            <div className='flex items-center justify-center m-5'>
                {c1Bts}
            </div>
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        gap-4">

                {cardList}
            </div>
        </div>
    )
}
