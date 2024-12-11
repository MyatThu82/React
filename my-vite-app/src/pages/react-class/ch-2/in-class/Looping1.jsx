import React from "react";

const array = ["First", "Second", "Third", "Fourth", "Fifth"];
const object = {
    first: 1,
    second: 2,
    third: 3,
    four: 4,
    five: 5,
};

export default class Looping1 extends React.Component {
    render(){
        return <section>
            <h1>Array</h1>
            {array.map(value => (
                <li key={value}>{value}</li>
            ))}
            <h1>Object</h1>
            {array.map(value => (
                <li key={value}>{value}</li>
            ))}
        </section>;
    }
}

