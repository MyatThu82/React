import React from "react";

const array = ["First", "Second", "Third"];
const object = {
    first: 1,
    second: 2,
    third: 3,
};

export default class looping extends Component {
    render(){
        return <section>
            <h1>Array</h1>
            {array.map(value => (
                <li key={value}>{value}</li>
            ))}
        </section>;
    }
}

