import React from "react";

function createInnerElements(names: any) {
  let arrayElements = [];
  for (let name of names) {
    arrayElements.push(<p key = {Math.random()}>{`${name} contains ${name.length} letters`}</p>);
  }
  console.log(arrayElements);
  return arrayElements;
}

export default function Summary(props: any) {
  return (
    <h4 className="bg-info text-white text-center p-2">
      {createInnerElements(props.names)[0]}
    </h4>
  );
}
