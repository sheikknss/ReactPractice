import React from "react";
import { useState, useEffect } from "react";
import Check from "./check";
import Button from "./button";

const todocart = (props) => {
  const [todo, setTodo] = useState([
    { name: "check1", ischecked: false, isdeleted: false },
  ]);

  useEffect(() => {
    console.log("child render");
  }, [props.card]);

  const [inputValue, setInputValue] = useState("");
  const handeToDoClick = () => {
    if (!inputValue.trim()) return; // Prevent adding empty items
    props.onAddItem(props.card.id, inputValue); // Call the onAddItem function passed from the parent component
    setInputValue("");
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Enter your todo"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button message="button clicked !!" OnClick={handeToDoClick}>
          Add ToDo
        </Button>
      </div>
      {props.card.title}
      <div>
        {props.card.cardlist.map((item, index) => {
          return <Check key={index} name={item.name} />;
        })}
      </div>
    </>
  );
};

export default React.memo(todocart);
