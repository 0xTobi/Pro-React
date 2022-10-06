import React from "react";

export default function Summary(props) {
  // React props are read only, and cannot be altered from the child component.
  // props.name = `Name: ${props.name}`;
  let result =
    props.name.length >= 4 ? (
      <React.Fragment>
        <td>{props.index + 1}</td>
        <td>{props.name}</td>
        <td>{props.name.length}</td>
      </React.Fragment>
    ) : null;

  return result;
}

// A component must always retun a value, if there's nothing to return, simply return null.
