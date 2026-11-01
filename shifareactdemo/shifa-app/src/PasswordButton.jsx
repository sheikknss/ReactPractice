import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

export const PasswordButton = () => {
  const [toggle, setToggle] = useState(false);
  const [inputType, setInputType] = useState(true);

  return (
    <>
      <input type={inputType ? "password" : "text"}></input>
      <button
        onClick={() => {
          setInputType((prevState) => !prevState);
        }}
      >
        ShowPassword
      </button>
    </>
  );
};
