import { useRef } from "react";
export const InputFocus = () => {
  const inputRef = useRef();

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Input Focus
      </button>
    </>
  );
};
