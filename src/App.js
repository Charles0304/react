
import './App.css';

import HelloCss from './02/HelloCss';
import { GoHomeFill } from "react-icons/go";



//component 시작은 대문자로 .. 일반 tag랑 사용자 정의 tag 구분
//리턴은 태그 하나만 가능하지만 <> </> fragment tag로 묶어주기 가능
function App() {
  return (
    <div className='flex flex-col w-full max-w-screen-xl
     h-screen mx-auto overscroll-y-auto'>
      <header className='flex justify-between h-20 bg-sky-100 
      items-center p-10 text-xl font-bold text-neutral-700'>
        <div>리액트 실습</div>
        <div><GoHomeFill/></div>
      </header>
      <main className='grow'>
        <HelloCss/>
      </main>
      <footer className='flex justify-center items-center
       text-white bg-slate-800 h-20 text-base'>
        &copy; 2024 chaesucheol. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
