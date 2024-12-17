import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  //side effect hooks
  //inline function

  useEffect(() => {
    console.log("Use Effect Rendered");
  }, [isTrue, count]);

  //3 variations

  {
    /* 
    1.useEffect(() => {
    console.log("Use Effect Rendered");
  });

   2.useEffect(() => {
    console.log("Use Effect Rendered");
  }, []);

   3.useEffect(() => {
    console.log("Use Effect Rendered");
  }, [isTrue, count]);


    */
  }

  function fetchUser() {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve({ id: 1, name: "Adam" });
    }, 1000);
    });
    }

    function GetUser(){
        const [id, setId] = useState("loading...");
const [name, setName] = useState("loading..."); 
 
useEffect(() => {
fetchUser().then(user => { 
setId(user.id); 
setName(user.name); 
}); 
});
    }

  return (
    <div>
      <p>
        Count : {count} is {isTrue && <> Is True</>}
      </p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setIsTrue(!isTrue)}>Change</button>
    </div>
  );
}


export default UseEffectExample;