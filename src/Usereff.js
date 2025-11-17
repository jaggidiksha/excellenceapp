import React from "react";
import { useRef, useState } from "react";

const Usereff = () => {
  const [time, settime] = useState(0);
  let timeref = useRef(null);

  const starttimer = () => {
    if (!timeref.current) {
      timeref.current = setInterval(() => {
        settime((prev) => prev + 1);
      }, 1000);
    }
  };

  return (
    <div>
      <h1>time:{time}seconds</h1>
      <button onClick={starttimer}>start</button>
      <button>Pause</button>
      <button>reset</button>
    </div>
  );
};

export default Usereff;

// import React from 'react';
// import { useRef } from 'react';

// const Usereff = () => {
//    let inputref= useRef(null)

//    const handleref=()=>{
//     inputref.current.value="876543";
//     inputref.current.focus();
//     inputref.current.style.color="red";
//     inputref.current.style.backgroundColor="yellow"
//    }
//   return (
//     <div   style={{textAlign:"center"}}>
//       <h1>useref hook</h1>
//       <input type="text" ref={inputref}></input>
//       <button  onClick={handleref}>clickme!</button>
//     </div>
//   )
// }

// export default Usereff
