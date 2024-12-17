import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import {MyButton} from 'vite.svg'

import Example3 from './pages/react-class/ch-4/Example3'
import FetchUser from './pages/react-class/ch-4/Use_Effect/FecthUser'
import UseEffectEx2 from './pages/react-class/ch-4/Use_Effect/UseEffectEx2'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
        <UseEffectEx2/>
    </div>
    );
}

// import React from 'react';

// function MyButton({children}){
//   return <button>{children}</button>;
// }

// class MyClassButton extends React.Component{
//   render(){
//     return <button>{this.props.children}</button>;
//   }
// }

// function App(){
  
//   return (
//     <div>
//     <MyClassButton>My Class Button</MyClassButton>
//     <MyButton>My Functional Button</MyButton>
//     </div>
//   );
// }

export default App;
