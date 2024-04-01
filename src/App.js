
import './App.css';

import { GoHomeFill } from "react-icons/go";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { Hello } from "./01/Hello"
import MyClock from "./08/MyClock"
import Lotto from "./06/Lotto"
import FoodMain from "./07/FoodMain"
//import TrafficMain from './09/TrafficMain';
//import RefVal from './10/RefVal';
//import RefInput from './10/RefInput';
import BoxOffice from './11/BoxOffice';
//import GalleryCard from './12/GalleryCard';
import GalleryMain from './13/GalleryMain';
import RouteMain from './14/RouteMain';
import Frcst from './15/Frcst';



//component 시작은 대문자로 .. 일반 tag랑 사용자 정의 tag 구분
//리턴은 태그 하나만 가능하지만 <> </> fragment tag로 묶어주기 가능
function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col w-full max-w-screen-xl
     h-screen mx-auto overscroll-y-auto'>
        <header className='flex justify-between h-20 bg-sky-100 
      items-center p-10 text-xl font-bold text-neutral-700'>
          <div>리액트 실습</div>
          <div className='flex justify-center items-center '>
            
          <div className='mr-2 p-2 hover:bg:blue=500 hover:text-red-500'><Link to='/fc'>ForeCast</Link></div>
          <div className='mr-2 p-2 hover:bg:blue=500 hover:text-red-500'><Link to='/gallery'>Gallery</Link></div>
            <div className='mr-2 p-2 hover:bg:blue=500 hover:text-red-500'><Link to='/boxoffice'>BoxOffice</Link></div>
          <div className='mr-2 p-2 hover:bg:blue=500 hover:text-red-500'><Link to='/food'>Food</Link></div>
            <div className='mr-2 p-2 hover:bg:blue=500 hover:text-red-500'><Link to='/lotto'>Lotto</Link></div>
            <Link to='/'>
              <GoHomeFill />
            </Link>
          </div>
        </header>
        <main className='grow flex justify-center flex-col items-center'>
          <Routes>
            <Route path='/' element={<MyClock />}></Route>
            <Route path='/lotto' element={<Lotto />}></Route>
            <Route path='/boxoffice' element={<BoxOffice />}></Route>
            <Route path='/gallery' element={<GalleryMain />}></Route>
            <Route path='/food' element={<FoodMain />}></Route>
            <Route path='/fc' element={<Frcst />}></Route>
          </Routes>
        </main>
        <footer className='flex justify-center items-center
       text-white bg-slate-800 h-20 text-base'>
          &copy; 2024 chaesucheol. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
