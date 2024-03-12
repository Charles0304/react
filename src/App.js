
import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import MyClock from './01/MyClock';
//component 시작은 대문자로 .. 일반 tag랑 사용자 정의 tag 구분
//리턴은 태그 하나만 가능하지만 <> </> fragment tag로 묶어주기 가능
function App() {
  return (
    <>
    <div className="App">
      <MyClock/>
    </div>
    </>
  );
}

export default App;
