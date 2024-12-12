import React, {createContext} from "react";
import "./boxExample.css";
import A from "./A";



export const ContextName = createContext();

function Context(){
    const username = "Myat";
    return(
        <div>
            <ContextName.Provider value={username}>
                <A />
                
            </ContextName.Provider>
        </div>
    );
}

export default Context;