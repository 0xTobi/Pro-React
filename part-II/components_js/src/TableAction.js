import React from "react";

export default function TableAction(props) {
  return (
    <button className="btn btn-primary btn-sm" onClick={props.reverseCallback}>
      Change
    </button>
  );
}
