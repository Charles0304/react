import "./Hello.css"

function Hello(){
    let n = Math.floor(Math.random()*100)+1;
    
    const st1 = {
        backgroundColor: "darkblue",
        color: "white",
        padding:"0px 10px"
    }
    let x;
    // let s = '';
    // if( n%2===0) s="짝수";
    // else s="홀수"
    const currentTime = new Date();
    
    return(
        
        <h1>
            <span style={st1}>Hello</span>
            
            <span style={{display:"inline-flex",margin:"10px"}}>
                {/* {n<10&&0}{n} */}
                {n<10?`0${n}`:n}
            </span>
            {n%2?<span style={{color:"red"}}>홀수</span>:<span style={{color:"blue"}}>짝수</span>}
            {n%2===0&&"🍎"}
            {n%2===1&&"🥕"}
            {x||"x는 undefined"}
            
            
        </h1>
    )
};

export default Hello;