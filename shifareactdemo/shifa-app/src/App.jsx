import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Counter as CounterApp } from "./counter";
import { PasswordButton } from "./PasswordButton";
import { FetchUser } from "./FetchUser";
import { InputFocus } from "./InputFocus";
import { ProductCalcOptimization } from "./ProductCalcOptimization";
import { PreventCallback } from "./PreventCallback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      {/* <CounterApp />
      <br />
      <PasswordButton />
      <br />
      <FetchUser />
      <br />
      <InputFocus />
      <br /> */}
      <ProductCalcOptimization />
      {/* <br />
      <PreventCallback /> */}
    </>
  );
}

export default App;
