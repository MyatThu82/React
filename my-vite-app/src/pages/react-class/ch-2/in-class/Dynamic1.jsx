import { Component } from "react";

 export default class Dynamic1 extends React.Component{
    render (){
        const enable = true;
        const name = "MyatThu";

        return(
            <section>
                <button disabled={enable}>Click</button>
            </section>
        )
    }
 }