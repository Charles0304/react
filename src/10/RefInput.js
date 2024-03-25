import React from 'react'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useState, useRef,useEffect} from 'react'

export default function RefInput() {
    const inputRef = useRef('')
    const [bts,setBts]=useState([]);
    const [tags, setTags] = useState([]);

    const handleAdd = () => {
        if(inputRef.current.value===''){
            alert("값을 입력하세요.")
            inputRef.current.focus()
            return
        }
        setBts([inputRef.current.value, ...bts])
    }
    const handleRemove = () => {
        setBts([]);
        inputRef.current.value="";
        inputRef.current.focus();
    }

    useEffect(()=>{
        inputRef.current.value='';
        inputRef.current.focus()
        let tm = bts.map((item,idx)=>
            <TailButton caption={item} key = {`bt${idx}`} color="orange"/>
        );
        setTags(tm);
    },[bts])
    return (
        <div className='flex flex-col w-full items-center justify-center'>
            <div className='w-11/12 flex items-center justify-between'>
                <div className='flex justify-center items-center'>
                    <TailInput type="text" inputRef={inputRef} ph="값입력"/>
                </div>
                <div className='flex text-center items-center justify-center'>
                    <TailButton caption="등록" color="blue" handleClick={handleAdd} />

                    <TailButton caption="삭제" color="blue" handleClick={handleRemove} />
                </div>
            </div>
            <div className='bg-slate-400 w-11/12 h-12 flex items-center justify-center'>
                {tags}
            </div>
        </div>
    )
}
