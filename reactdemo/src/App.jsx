import { useMemo, useState, useCallback } from "react";
import "./App.css";
import Button from "./button";
import TodoCart from "./todocart";

function App() {
  const [todo, setTodo] = useState([
    {
      cardlist: [
        { name: "check1", ischecked: false, isdeleted: false },
        { name: "check2", ischecked: false, isdeleted: false },
      ],
      title: "card1",
      id: 0,
    },
  ]);

  const [todoTitle, setTodoTitle] = useState("");
  // const [card, setCard] = useState();

  const handeToDoCardClick = useCallback((cardId, newItem) => {
    console.log("handeToDoCardClick", cardId, newItem);

    setTodo(
      todo.map((card) => {
        {
          if (card.id === cardId) {
            return {
              ...card,
              cardlist: [
                ...card.cardlist,
                { name: newItem, ischecked: false, isdeleted: false },
              ],
            };
          }
          return card; // Fixed bug: Must return unchanged cards
        }
      }),
    );
  }, []);

  const handeNewToDoCardClick = () => {
    if (!todoTitle.trim()) return;

    setTodo([
      ...todo,
      {
        cardlist: [],
        title: todoTitle,
        id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 0,
      },
    ]);

    setTodoTitle("");
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Enter your todo title"
          name="todoTitle"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <Button message="Todo Card Added!" OnClick={handeNewToDoCardClick}>
          Add Card
        </Button>
      </div>
      {todo.map((element) => (
        <TodoCart
          card={element}
          onAddItem={handeToDoCardClick}
          key={element.id}
        />
      ))}

      {/* <TodoCart card={todo[0]} onAddItem={handeToDoCardClick} /> */}
    </>
  );
}

export default App;
