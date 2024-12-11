import React,{Component} from 'react';

class MyButton extends Component{
    static defaultProps = {
        disabled: false,
        text: "My Button",
    };

    render(){
        const {disabled,text} = this.props;

        return <button disabled={disabled}>{text}</button>
    }
}

class Looplist extends Component{

    render(){
        const {List}=this.props

        return(
            <>
            {List.map(i => (
                <p key={i}>{i}</p>
            ))}
            </>
        )
    }
}

export class Propsexample extends Component {
    state = {
        List:["First","Second", "Third"],
    };

    render(){
        return(
            <>
            <MyButton disabled={true} text="With parameter"/>
            <Looplist List={this.state.List}/>
            </>
        );
                    
    }
}