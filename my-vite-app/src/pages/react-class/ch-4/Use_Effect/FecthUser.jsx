import React, { useEffect, useState } from "react";

  function FetchUser() {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve({ id: 1, name: "Adam" });
    }, 1000);
    });
    

    function GetUser(){
        const [id, setId] = useState("loading...");
        const [name, setName] = useState("loading..."); 
 
useEffect(() => {
    FetchUser().then(userInfo => {
        setId(userInfo.id);
        setName(userInfo.name);
    });
})
    }


  return (
    <div>
      <p>User ID: {id}</p>
      <p>User Name: {name}</p>
    </div>
  );
 
  }


export default FetchUser;