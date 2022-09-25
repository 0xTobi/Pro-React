import React, {useState} from "react";

export default function Display(props) {
  const [state, setState] = useState({ counter: 1 });

  const incrementCounter = () => {
    setState({ counter: state.counter + 1 });
  };

  return (
    <div>
      <h2 className="bg-primary text-white text-center p-2">
        <div>Props Value: {props.value}</div>
        <div>Local Value: {state.counter} </div>
      </h2>
      <div className="text-center">
        <button className="btn btn-primary m-2" onClick={props.callback}>
          Parent
        </button>
        <button className="btn btn-primary m-2" onClick={incrementCounter}>
          Local
        </button>
      </div>
    </div>
  );
}
