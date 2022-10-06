import React from "react";
import SimpleButton from "./SimpleButton";

export default function CallbackButton(props) {
  let { theme, ...childProps } = props;
  return (
    <SimpleButton
      {...childProps}
      className={`btn btn-${props.theme} btn-sm m-1`}
    />
  );
}


// DEFAULT PROP VALUES
CallbackButton.defaultProps = {
  text: "Default Text",
  theme: "warning",
};

