import React from "react";
import "./App.css";
import { Message } from "./Message";
import Summary from "./Summary";

function App() {
  return (
    <div className="App">
      <h1>Hello Adam</h1>
      <Message greeting="Hello there" name="bob" />
      <Message greeting="Hola" name={"Alice and Smith"} />
      <Message greeting="This is a Summary" />
      <Summary names={["Bob", "Alice", "Dora"]} />
    </div>
  );
}

export default App;
