import React, { useState, Component } from "react";

//job description
//Understanding es7+ javascript
//const promise resolve await async!
{
  /*
    Shop  === Function

*/
}

function PrrExample() {
  const [items, setItmes] = useState([]);

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["First", "Second", "Third"]);
      }, 3000);
    });
  }
  fetchData().then((items) => {
    setItmes(items);
  });

  return (
    <>
    <div>
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
    </>
  );
}

export default PrrExample;
