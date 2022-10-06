import React from "react";

export default function SimpleButton(props) {
  return (
    <button onClick={props.callback} className={props.className}>
      {props.text}
    </button>
  );
}
