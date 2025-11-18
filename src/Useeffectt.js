import React from "react";
import { useEffect, useState } from "react";

const Useeffectt = () => {
  const [count, setcount] = useState(0);
  const [time, settime] = useState(0);

  useEffect(() => {
    // side effect
    document.title = `you have clicked ${count} times!`;
  }, [count]);

  useEffect(() => {
    // side effect
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  useEffect(() => {
    // side effect
    setTimeout(() => {
      settime(time + 1);
    }, 1000);
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useeffect hook</h1>
      <h2>you have clicked {count} times!</h2>
      <button onClick={() => setcount(count + 1)}>update count</button>
      <div
        style={{ height: "200px", width: "200px", backgroundColor: "pink" }}
        data-aos="fade-up"
      ></div>
      <h1>you are here from {time} seconds!</h1>
    </div>
  );
};

export default Useeffectt;

// useEffect is a hook which is used to render   the side  effects in our functional components , side effect such as data fetching, updating title of react app, animations, automatic timing functions etc.
// syntax :
// useEffect(()=>{
//side effect
// },dependency array )

// dependency array :
// variable in dependency array [variable] :side effect runs each time the value of variable changes
// [] empty dependency array : side effect runs only once after the initial render
// no dependency array : side effect runs each time your app is rendered
