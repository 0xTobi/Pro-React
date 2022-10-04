import React from "react";
import "./App.css";
import { Message } from "./Message";
import { Summary } from "./Summary";

let names = ["Bob", "Alice", "Dora"];

function App() {
  return (
    // <div className="App">
    //   <h1>Hello Adam</h1>
    //   <Message greeting="Hello there" name="bob" />
    //   <Message greeting="Hola" name={"Alice and Smith"} />
    //   <Message summary="This is a Summary I made" />
    //   <Summary names={["Bob", "Alice", "Dora"]} />
    // </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>{names.map((name, index) => {})}</tbody>
    </table>
  );
}

export default App;
