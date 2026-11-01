import { useState, useCallback, memo } from "react";

export const PreventCallback = () => {
  const [count, setCount] = useState(0);
  console.log("parent rendered");

  //this useCallback will preserve callback function reference across parent rerender
  const handleClick = useCallback(() => {
    console.log("ChildClicked!");
  }, []);

  const handleParentClick = () => {
    console.log("ParentClicked!");
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <ChildComponent ChildClick={handleClick} />
      count{count}
      <button onClick={handleParentClick}>ParentButton</button>
    </>
  );
};

// since the callback function(props) reference was preserved by useCallback, memo will prevent child rerender on parent rerender
export const ChildComponent = memo((props) => {
  console.log("Child rendered");
  const handleClick = () => {
    props.ChildClick();
  };
  return (
    <>
      <button onClick={handleClick}>Child button</button>
    </>
  );
});
