import React from "react";
import "./App.css";
import { Message } from "./components";
import { getText } from "./data";

function App() {
  const [text, setText] = React.useState();
  React.useEffect(() => {
    getText(setText);
  }, []);

  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;
