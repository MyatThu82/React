import { useState } from "react";

function InputAccept(){
    const [varemail, setVaremail] = useState("");
    const [showemail, setShowemail] = useState("");

    function handleChange(event){
        setVaremail(event.target.value);

    }

    function handleSubmit(){
        setShowemail(varemail);
    }

    return(
        <div>
            <label>Enter Email :</label>
            <input
            value={varemail}
            onChange={handleChange}
            placeholder="myatthu@gmail.com"/>
            <button onClick={handleSubmit}>Submit</button>
            <p>Logged In as {showemail}</p>
        </div>
    );
}

export default Ex-2;