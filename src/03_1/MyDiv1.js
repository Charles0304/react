import React from 'react'
import MyDiv2 from './MyDiv2';

export default function MyDiv1() {
    const dname1 = 'div1';
    const dname2 = 'div2';
    const dname3 = 'div3';
  return (
    <div className="w-4/5 h-4/5 flex items-center justify-center bg-yellow-100 text-gray-900
    flex-col">
        <p className='w-4/5 flex justify-start font-bold text-2xl m-10'>
            {dname1}
        </p>
        <MyDiv2 d1={dname1} d2={dname2} d3={dname3}/>
    </div>
  )
}
