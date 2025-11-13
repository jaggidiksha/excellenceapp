import React from 'react';
import { useRef } from 'react';

const Useref = () => {
let inputref=useRef(null)

const handleref=()=>{

    inputref.current.value="8765432";
    inputref.current.focus();
    inputref.current.style.color="red"
    inputref.current.style.backgroundColor="yellow"

}

  return (
    <>
<div style={{textAlign:"center"}}>
          <h1>useref hook</h1>
          <input type="text" ref={inputref}></input>
          <button onClick={handleref}>clickme!</button>
</div>
    </>
  )
}

export default Useref
