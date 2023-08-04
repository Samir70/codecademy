import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("")
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime((prevtime) => prevtime + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  // note the array added as a second argument to useEffect
  // useEffect runs after first render, or when something listed in the array updates
  // So in this case, useEffect only runs at the start
  // Otherwise, the timer stops as we type in the input box.

  const handleChange = ({target}) => {
    setName(target.value)
  }
  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} />
    </>
  );
}
