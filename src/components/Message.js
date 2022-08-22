import "../styles/Message.scss";

export const Message = (props, context) => {
  return (
    <div className="message">
      <div className="text">{props.item.author}</div>
      <div className="text">{props.item.text}</div>
    </div>
  );
};
