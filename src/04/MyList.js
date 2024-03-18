
import { IoHeartSharp } from "react-icons/io5";
import { useState } from "react";
export default function MyList({title, imgUrl, content}) {
  //지역변수
  let cnt = 0;

  //state 변수 [변수명,setter]
  const [stCnt, setStCnt] = useState(0);

  const handleLike = (t)=>{
    console.log("like"+t)
    cnt=cnt+1;
    console.log(`cnt = ${cnt}`)
    setStCnt(stCnt+1);
  }

  return (
    <div className='flex border rounded w-full bg-yellow-100'>
        <div className="w-1/4 max-w-40 items-center flex">
            <img src ={imgUrl}  alt="html"/>
        </div>
        <div className="w-3/4 px-5 py-3">
            <h1 className="text-2xl font-medium">{title}</h1>
            <p>{content}</p>
            <p className="w-full flex justify-end mt-5 font-bold items-center">
                <IoHeartSharp className="text-red-600 hover:text-black hover:cursor-pointer" onClick={()=>{handleLike(title)}} />
                <span className="mx-1">좋아요</span>
                <span>{stCnt}</span>
            </p>
        </div>
    </div>
  )
}
