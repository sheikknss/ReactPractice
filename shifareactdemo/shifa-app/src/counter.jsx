import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrementClick = () => {
    if (count <= 0) return;
    setCount((prevStates) => prevStates - 1);
  };

  return (
    <>
      <h2>count:{count}</h2>
      <button onClick={handleIncrementClick}> + </button>
      <button onClick={handleDecrementClick}> - </button>
    </>
  );
};
