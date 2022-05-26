// import React, { useState } from 'react'

// const Stopwatch = () => {

//     const [timerId, setTimerId] = useState(null);
//     const [watch, setWatch] = useState(0);

//     const start = () => {
//         if(!timerId) {
//             let id = setInterval(() => {
//                setWatch((watch) => watch+1 );
//            }, 1000);
//            setTimerId(id);
//         }
//     };

//     const pause = () => {
//         clearInterval(timerId);
//         setTimerId(null);
//     };

//     const reset = () => {
//         clearInterval(timerId);
//         setWatch(0);
//     };

//   return (
//     <div>
//         <h3>StopWatch</h3>
//         <h1>{watch}</h1>
//         <div>
//             <button onClick={start}>Start</button>
//             <button onClick={pause}>Pause</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     </div>
//   )
// }

// export default Stopwatch

import React, { useState } from 'react'

const Stopwatch = () => {

    const [value, setValue] = useState();
    const [timerId, setTimerId] = useState(null);
    const [watch, setWatch] = useState(0);

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    }
    
    const start = () => {  
        if(!timerId){
            let id = setInterval(() => {
                setWatch((watch) => watch+1);
            }, 10);
            setTimerId(id);
        }
          
    };

    const pause = () => {
        clearInterval(timerId);
        setTimerId(null);
    };


    const reset = () => {
        
        clearInterval(timerId);
        setWatch(0);
    };
// console.log(value);

  return (
    <div>
        <h3>StopWatch</h3>
        <h1>{secondsToHms(watch)}</h1>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
        <input type="text" onKeyDown={(e) => {
            if(e.key === "Enter") {
                setValue(Number(e.target.value))
            }
        }}/>
    </div>
  )
};

export default Stopwatch;