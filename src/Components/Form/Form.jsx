import React, { useState } from "react";
import { AUTHOR } from "../../constans";

export const Form = ({ addMessage }) => {
  const [text, setText] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addMessage({
      author: AUTHOR.user,
      text,
    });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button disabled={!text}>Отправить</button>
      </form>
    </div>
  );
};
