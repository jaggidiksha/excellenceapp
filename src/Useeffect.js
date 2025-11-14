import React from "react";
import { useState, useEffect } from "react";

const Useeffect = () => {
  const [count, setcount] = useState(0);
  const [time, settime] = useState(0);

  useEffect(() => {
    // side effect
    document.title = `you have clicked ${count} times !`;
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
    <div>
      <h1>you have clicked {count} times</h1>
      <button onClick={() => setcount(count + 1)}>update</button>

      <div
        style={{ height: "200px", width: "200px", backgroundColor: "pink" }}
        data-aos="fade-up"
      ></div>
      <h1>you are here from {time} seconds!</h1>
    </div>
  );
};

export default Useeffect;
