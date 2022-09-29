import React, {useState} from "react";
import Display from "./Display";
import "./App.css";

export default function App() {
  const [state, setState] = useState({ city: "London" });

  const changeCity = () => {
    // debugger
    setState({
      city: state.city === "London" ? "New York" : "London",
    });
  };

  return <Display value={state.city} callback={changeCity} />;
}
