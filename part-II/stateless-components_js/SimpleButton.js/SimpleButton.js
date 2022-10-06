import React from "react";
import PropTypes from "prop-types";

export default function SimpleButton(props) {
  return (
    <button onClick={props.callback} className={props.className} disabled={props.disabled === "true" || props.disabled === true}>
      {props.text}
    </button>
  );
}

SimpleButton.defaultProps = {
  disabled: false,
};

// DECLARING PROP TYPES
SimpleButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

// PropTypes Methods
// "oneOfType" This method accepts an array of PropTypes values that the component is willing to receive.
// "oneOf" This method accepts an array of values that the component is willing to receive.