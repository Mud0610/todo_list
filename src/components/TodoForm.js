import React from "react";
import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const onFormSubmit = () => {};

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="form_input"
        onChange={onInputChange}
      />
    </form>
  );
};

export default TodoForm;
