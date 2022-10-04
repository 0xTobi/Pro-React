import React from "react";

// function createInnerElements(names: any) {
//   // USING THE FOR OF LOOP
//   let arrayElements = [];
//   for (let name of names) {
//     arrayElements.push(
//       <div key={Math.random()}>{`${name} contains ${name.length} letters`}</div>
//     );
//   } 

//   return arrayElements;


//   // USING THE MAP HGHER ORDER METHOD
//   return names.map((name: any) => (
//     <div key={Math.random()}>{`${name} contains ${name.length} letters`}</div>
//   ));
// }

export function Summary(props: any) {
  return (
    <div>

      {/* <h4>{createInnerElements(props.names)}</h4> */}

      {props.names.map((name: any) => {
        <div
          key={Math.random()}
        >{`${name} contains ${name.length} letters`}</div>;
      })}
    </div>
  );
}
