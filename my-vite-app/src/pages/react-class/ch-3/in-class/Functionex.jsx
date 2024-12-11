import React from "react";

function MyButton({disabled, text}){
    return(
        <button disabled={disabled}>{text}</button>
    )
}

function Functionex (){
    const object={
        first: {
            text: 'First Button',
            disabled: false
        },
        second: {
            text: 'Second Button',
            disabled: true
        }
    }

    
    return(
        /* <div>Functionex</div> */
        <>
        <MyButton disabled={object.first.disabled} text={object.first.text}/>
        <MyButton disabled={object.second.disabled} text={object.second.text}/>
        </>
        
      
        
    )
}

export default Functionex