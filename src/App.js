import React from "react";
import "./styles/App.scss";
import { Message } from "./components";

function App() {
  const [messageList, setMessageList] = React.useState([]);
  const [value, setValue] = React.useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  function onSend(event) {
    setValue("");
    const newMessage = [{ author: "sender:", text: value }];
    const autoResponse = [
      { author: "ROBOT:", text: "Don't write here anymore!" },
    ];
    setMessageList([...messageList, ...newMessage]);
    setTimeout(() => {
      setMessageList([...messageList, ...autoResponse]);
    }, 9000);
  }

  React.useEffect(() => {
    setMessageList([{ author: "author:", text: "Text" }]);
  }, []);

  return (
    <div className="App">
      <div className="list">
        {messageList.map((item, id) => (
          <Message item={item} key={id} />
        ))}
      </div>
      <div className="input">
        <input
          className="inputField"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button onClick={onSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
