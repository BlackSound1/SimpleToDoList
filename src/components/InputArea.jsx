import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newVal = event.target.value;

    setInputText(newVal);
  }

  return (
    <div className="form">
      <input type="text" value={inputText} onChange={handleChange} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
