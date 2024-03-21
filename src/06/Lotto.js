import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"
import React, { useState } from 'react';
export default function Lotto() {
    const [balls, setBalls] = useState([]);
    

    let rand = 0
    const handleLottoClick = () => {
        let nums = []
        console.log('click')

        let num = 0
        while (num < 6) {
            rand = Math.floor(Math.random() * 45) + 1
            if (!nums.includes(rand)) {
                nums.push(rand)
                num++
            }
        }
        nums.sort((a, b) => {
            return a - b;
        })
        while (true) {
            rand = Math.floor(Math.random() * 45) + 1
            if (!nums.includes(rand))
                break
        }
        nums.push(rand)

        
        setBalls(nums.map((n, idx) => {
            if (idx===5)
                return <><TailBall key={n} num={n} /><span key={0} className="text-xl font-bold">+</span></>
            else
                return <TailBall key={n} num={n} />
        }));

        

    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                {balls}

            </div>
            <TailButton caption='로또번호생성' handleClick={handleLottoClick} color='blue' />
        </div>
    )
}
