import React from "react";

import "../Message/Message.css";

export const Message = (props) => {
  const constText = "Текст";

  return (
    <div className="message">
      <h1 className="message__title">{props.text}</h1>
      <h2 className="message__subtitle">{constText}</h2>
    </div>
  );
};
