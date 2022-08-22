import '../styles/Message.scss';

export const Message = (props, context) =>{
  return (
    <div className="Message">
          {props.text}
    </div>
  );
}
