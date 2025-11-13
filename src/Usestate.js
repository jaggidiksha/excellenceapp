import React from 'react';
import { useState } from 'react';

const Usestate = () => {
    const[count,setcount]=useState(0);
    // function abc(){
    //     setcount(count+1)
    // }
  return (
    <div>
      <h1>you have clicked {count} times!</h1>
      <button onClick={()=>setcount(count+1)}>update count</button>
    </div>
  )
}

export default Usestate;
// hooks : special functions that let us hook into react ui 
// two types 
// predefined
// user defined 
//  hook always starts with keyword use weather it is predefined or userdefined

// rules to use the hooks:
// 1. always import the hook at the top level  
// 2. to see the effect of a hook we need to perform some events in the ui 

// useState : it is a state management hook in react 
// we have two states initail state , updated state (setter function )
