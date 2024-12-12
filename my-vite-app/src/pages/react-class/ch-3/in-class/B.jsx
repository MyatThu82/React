import { useContext } from "react";
import "../in-class/boxExample.css";
import { ContextName } from "./Context";

export default function B(){
    const username = useContext(ContextName);

    return <div className="box">{username}</div>
}