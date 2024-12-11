import React,{Component} from 'react';

export default class MyComponment extends Component{
    state = {
        first: 'loading...',
        second: 'loading...',
        third: 'loading...',
        fourth: 'loading...',
        doneMessage: 'finished!'
    };

    render() {

        const { state } = this; 
        setTimeout(()=>{
            this.setState({
                first: 'done',
            });
        },3000);

        setTimeout(()=>{
            this.setState({
                second: 'done',
            });
        },3000);
        
        return (
            <>
            <p>{state.first}</p>
            </>
        )
         
        
            } 
}