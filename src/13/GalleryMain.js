import GalleryCard from './GalleryCard'

import { RiEarthFill } from "react-icons/ri";
import { useRef, useState, useEffect } from 'react';
import TailInput from '../UI/TailInput';
import TailButton from '../UI/TailButton';
//<GalleryCard gdata={gdata} />
export default function GalleryMain() {
    const keyword = useRef();
    const [cards, setCards] = useState();
    const [selList, setSel] = useState();
    const [dataList, setData] = useState();


    useEffect(() => {
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=40&resultType=json`
    
        fetch(url).then(resp => resp.json())
            .then(item => setData(item.getFestivalKr.item))
            .catch(err => console.log(err))

    }, []) //url fetch
    const handleCards = ()=>{
        let tm = dataList.filter(item=>item.GUGUN_NM===keyword.current.value).map((item,idx)=><GalleryCard gdata={item} key={idx}/>)
        setCards(tm)
        console.log(keyword.current.value)
    } //셀렉트가 바뀌면 카드 만들기 select박스에서 onchange에 작동함수

    useEffect(()=>{
        if(dataList!=null){
            let tmp = dataList.map(item=>item.GUGUN_NM)
            tmp = new Set(tmp)
            tmp = [...tmp].sort()
            setSel(tmp.map(item=>
                <option value={item} key={item}>{item}</option>
            ))
        }
    },[dataList])//datalist에 fetch가 완료되면 구 군 리스트 만들기 중복제거


    //let tmp = tdata.filter(item=>item.사고유형_대분류===selC1).map(item=>item.사고유형_중분류)

    
    return (
        <div className='flex flex-col w-11/12 h-full items-center'>
            <div className='w-full justify-start mt-8 bg-yellow-100 p-4 shadow-md'>
                <div className='flex items-center justify-center mb-2 w-full'>
                    <h1 className='text-2xl font-bold'>부산축제정보</h1>
                    <RiEarthFill className='text-2xl ml-2' />
                </div>
                <div className='flex items-center justify-center w-full'>
                    <select name="ggs" ref={keyword} onChange={handleCards} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option defaultValue>---선택---</option>
                        {selList}
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-10 gap-4'>
                {cards}
            </div>
        </div>
    )
}
