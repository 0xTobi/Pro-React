import React from "react";
import "./App.css";
import Summary from "./Summary";
import TableAction from "./TableAction";
import ReactDOM from "react-dom";

let names = ["Bob", "Alice", "Dora"];

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById("root"));
}

function App() {
  return (
    // <div className="App">
    //   <h1>Hello Adam</h1>
    //   <Message greeting="Hello there" name="bob" />
    //   <Message greeting="Hola" name={"Alice and Smith"} />
    //   <Message summary="This is a Summary I made" />
    //   <Summary names={["Bob", "Alice", "Dora"]} />
    // </div>

    <React.Fragment>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => {
          return (
            <tr key={name}>
              <Summary index={index} name={name} />
            </tr>
          );
        })}
      </tbody>
      <TableAction reverseCallback={reverseNames} />
    </React.Fragment>
  );
}

export default App;
