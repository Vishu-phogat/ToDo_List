import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        style={{ backgroundColor: isMousedOver ? "red" : "blue" }}
        onClick={() => {
          props.OnAdd(inputText);
          setInputText("");
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
