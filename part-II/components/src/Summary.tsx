import React from "react";

function createInnerElements(names: any) {
  // let arrayElements = [];
  // for (let name of names) {
  //   arrayElements.push(
  //     <div key={Math.random()}>{`${name} contains ${name.length} letters`}</div>
  //   );
  // }
  // return arrayElements;

  return names.map((name: any) => (
    <div key={Math.random()}>{`${name} contains ${name.length} letters`}</div>
  ));
}

export default function Summary(props: any) {
  return (
    <>
      <h4 className="bg-info text-white text-center p-2">
        {createInnerElements(props.names)}
      </h4>
    </>
  );
}
