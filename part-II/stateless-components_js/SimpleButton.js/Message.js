import React from "react";

export const Message = (props) => {
  // if (props.name) {
  //   return (
  //     <h4
  //       className={
  //         props.name === "bob"
  //           ? "p-0.5 bg-red-500/100 text-center text-white mb-1.5"
  //           : "p-0.5 bg-green-500/100 text-center text-white mb-1.5"
  //       }
  //     >
  //       {props.name} says {props.greeting}
  //     </h4>
  //   );
  // } else {
  //   return (
  //     <h4 className="p-0.5 bg-blue-500/100 text-center text-white mb-1.5">
  //       {props.greeting}
  //     </h4>
  //   );
  // }

  // (REWRITTEN USING TERNARY OPERATOR)

  const message = props.name ? (
    <h4
      className={
        props.name === "bob"
          ? "p-0.5 bg-red-500/100 text-center text-white mb-1.5"
          : "p-0.5 bg-green-500/100 text-center text-white mb-1.5"
      }
    >
      {props.name} says {props.greeting}
    </h4>
  ) : (
    <h4 className="p-0.5 bg-blue-500/100 text-center text-white mb-1.5">
      {props.summary}
    </h4>
  );

  return message;
};
