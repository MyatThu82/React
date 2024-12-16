import { useState } from "react";

function Example(){
    const [name, setName] = useState("original value");

    function handleClick(){
        setName("Myat");
    }

    return (
        <div>
            <p>Current Name Value is {name}</p>
            <button onClick={handleClick}>Click!</button>
        </div>
    );
}
export default Example;