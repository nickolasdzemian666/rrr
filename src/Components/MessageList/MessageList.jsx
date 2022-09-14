import React from "react";

export const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((el, idx) => (
        <li key={idx}>
          {el.author}: {el.text}
        </li>
      ))}
    </ul>
  );
};
