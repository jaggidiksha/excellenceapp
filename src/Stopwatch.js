import React from "react";
import { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, settime] = useState(0);
  let timeref = useRef(null);

  const starttimer = () => {
    if(!timeref.current){
        timeref.current=setInterval(()=>{
         settime((prev)=>prev+1)
        },1000)
    }
  };

  const pausetimer = () => {};

  const resettimer = () => {};
  return (
    <div style={{ textAlign: "center" }}>
      <h1>stopwatch</h1>

      <h2>Time:{time} seconds</h2>

      <button onClick={starttimer}>start</button>
      <button onClick={pausetimer}>pause</button>
      <button onClick={resettimer}> reset</button>
    </div>
  );
};

export default Stopwatch;
