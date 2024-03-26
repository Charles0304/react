import GalleryCard from './GalleryCard'
import gdata from './GalleryData.json'
import { RiEarthFill } from "react-icons/ri";
import { useRef, useState, useEffect } from 'react';
import TailInput from '../UI/TailInput';
import TailButton from '../UI/TailButton';
//<GalleryCard gdata={gdata} />
export default function GalleryMain() {
    const keyword = useRef();
    const [cards, setCards] = useState();
    const [gallerys, setGallerys] = useState();
    const handleKeyword = () => {
    }
    const handleFetch = () => {
        if (keyword.current.value === '') {
            alert("키워드를 입력하세요.");
            keyword.current.focus();
            return;
        }
        let key = encodeURI(keyword.current.value)
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
        url = url + `keyword=${key}&_type=json`
        fetch(url).then(resp => resp.json())
            .then(item => setGallerys(item.response.body.items.item))
            .catch(err => console.log(err))
    }
    const handleCancel = () => {
        setCards([]);
        setGallerys([]);
    }
    useEffect(() => {
        if (gallerys) {
            let tm = gallerys.map((item,idx)=><GalleryCard gdata={item} key={idx}/>)
            setCards(tm)
        }
    }, [gallerys])
    return (
        <div className='flex flex-col w-11/12 h-full items-center'>
            <div className='w-full justify-start mt-8 bg-yellow-100 p-4 shadow-md'>
                <div className='flex items-center justify-center mb-2 w-full'>
                    <h1 className='text-2xl font-bold'>한국관광공사_관광사진 정보</h1>
                    <RiEarthFill className='text-2xl ml-2' />
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-1 items-center justify-center w-full'>
                    <div className='col-span-2'>
                        <TailInput type="text" inputRef={keyword} handleChange={handleKeyword} ph="" />
                    </div>
                    <TailButton caption="확인" color="blue" handleClick={handleFetch} />
                    <TailButton caption="취소" color="blue" handleClick={handleCancel} />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-10 gap-4'>
                {cards}
            </div>
        </div>
    )
}
