import React,{Component} from 'react';

export default class MyComponment extends Component{
    state = {
        first: 'loading...',
        second: 'loading...',
        third: 'loading...',
        fourth: 'loading...',
        doneMessage: '.....'
    };

    render() {

        const { state } = this; 
        setTimeout(()=>{
            this.setState({
                first: 'done',
            });
        },2000);

        setTimeout(()=>{
            this.setState({
                second: 'done',
            });
        },3000);

        setTimeout(()=>{
            this.setState({
                third: 'done',
            });
        },4000);

        setTimeout(()=>{
            this.setState({
                fourth: 'done',
            });
        },5000);

        setTimeout(()=>{
            this.setState({
                doneMessage: 'Finished!',
            });
        },6000);
        
        return (
            <>
            <p>{state.first}</p>
            <p>{state.second}</p>
            <p>{state.third}</p>
            <p>{state.fourth}</p>
            <p>{state.doneMessage}</p>
            </>
        )
         
         } 
}