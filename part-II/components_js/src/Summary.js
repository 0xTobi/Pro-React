import React from "react";

export default function Summary(props) {
  // React props are read only, and cannot be altered from the child component.
  // props.name = `Name: ${props.name}`;
  return (
    <React.Fragment>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
      <td>{props.name.length}</td>
      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={props.reverseCallback}
        >
          Change
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => props.promoteCallback(props.name)}
        >
          Promote
        </button>
      </td>
    </React.Fragment>
  );
}

// A component must always retun a value, if there's nothing to return, simply return null.
