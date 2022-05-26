import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(0);

    // const [timer, setTimer] = useState(() => 10)
    //YOU can use this also where initial value is set using a function 

    useEffect(() => {
        const id = setInterval(() => {
            if(timer>100){
                clearInterval(id);
            }else{
                setTimer((timer) => timer +1);
            }
           
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);

  return (
    <div>
        Count Up : {timer}
        <br/>
        {/* <button onClick={() => setTimer((timer) => timer + 1)}>+</button>
        <button onClick={() => setTimer((timer) => timer - 1)}>-</button> */}
    </div>
  )
}

export default Timer