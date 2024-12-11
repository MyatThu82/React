import React,{Component} from "react";

export default class StateExample extends Component{
    state = {
        first: false,
        second: true,
    };

    render(){
        const {first , second, third, name, age} = this.state;

        setTimeout(() => {
            this.setState({
                first: true,
                second: false,
                name: "Myat Thu",
                age: 22,
            });
        }, 3000

        );


        return(
            <main>
                <section>
                    <button disabled={first}>First</button>
                </section>
                <section>
                    <button disabled={second}>Second</button>
                </section>
            </main>
        );
    }
}

// export function FunctionalState(){
//     const object = {
//         first: true,
//         second: false,
//     }

//     return (
//         <main>
//                 <section>
//                     <button disabled={first}>First</button>
//                 </section>
//                 <section>
//                     <button disabled={second}>Second</button>
//                 </section>
//             </main>
//     )
// }