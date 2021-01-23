import React from "react";
import Item from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = React.useState([]);
  // const [isMousedOver, setMousedOver] = React.useState(false);

  function addItem(inputText) {
    setItems((prevItems) => [...prevItems, inputText]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // function handleMouseOver() {
  //   setMousedOver(true);
  // }

  // function handleMouseOut() {
  //   setMousedOver(false);
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea onAdd={addItem} />

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Item
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
