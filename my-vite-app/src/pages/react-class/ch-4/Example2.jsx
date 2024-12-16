import React, { useState } from "react";

/*
Where 
*[/]functional component [X]Class Component

Why
Functional Component don't know this.

-Hooks
useState
useEffect
useContext

-Advanced Hooks
useRef
useReducer
*/

function Example2() {
  return (
    <div>
      <InputAccept />
    </div>
  );
}

function InputAccept() {
  const [varemail, setVaremail] = useState("");
  const [showemail, setShowemail] = useState("");
  const [show, setShow] = useState (false);

  function handleChange(event) {
    setVaremail(event.target.value);
  }

  function handleSubmit() {
    setShowemail(varemail);
  }

  function Counter(){
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count +1);
    };
  }

  return (
    <div>
      {/* <label>Enter Email :</label>
      <input
        value={varemail}
        onChange={handleChange}
        placeholder="chanminswe13@gmail.com"
      />
      <br />
      <button onClick={handleSubmit}>Submit ! </button>
      {showemail === "" ? (
        <p>Not logged in </p>
      ) : (
        <p>Logged In as {showemail}</p>
      )} */}
      <p>Count : {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={setCount(count = 1)}></button>
    </div>
  );
}

export default Example2;