import React from "react";
import "./App.css";
import Summary from "./Summary";
import ReactDOM from "react-dom";

let names = ["Bob", "Alice", "Dora"];

function reverseNames() {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById("root"));
}

function promoteName(name) {
  names = [name, ...names.filter((val) => val !== name)];
  ReactDOM.render(<App />, document.getElementById("root"));
}

function App() {
  return (
    <table>
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
              <Summary
                index={index}
                name={name}
                reverseCallback={reverseNames}
                promoteCallback={promoteName}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
