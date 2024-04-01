import React from 'react'
import TailButton from '../UI/TailButton'
import { Link, useNavigate } from 'react-router-dom'

export default function RouteNav() {
    const navigator = useNavigate();
    return (
        <>
            <div className='w-11/12 flex justify-center items-center'>
                <ul className='flex w-full justify-center items-center'>
                    <li className='px-4 py-2 m-2 text-white rounded-md w-full bg-yellow-200'><Link to ={"/"}>Home</Link></li>
                    <li className='px-4 py-2 m-2 text-white rounded-md w-full bg-yellow-200'><Link to ={"/page1/포도"}>page1</Link></li>
                    <li className='px-4 py-2 m-2 text-white rounded-md w-full bg-yellow-200'><Link to ={"/page2?item1=사과&item2=바나나"}>page2</Link></li>
                </ul>
            </div>
            <div className='w-11/12 flex justify-center items-center'>
                <TailButton caption="Home" color="blue" handleClick={() => { navigator("/") }} />
                <TailButton caption="Page1" color="blue" handleClick={() => { navigator("/page1/포도") }} />
                <TailButton caption="Page2" color="blue" handleClick={() => { navigator("/page2?item1=사과&item2=바나나") }} />
            </div>
        </>
    )
}
