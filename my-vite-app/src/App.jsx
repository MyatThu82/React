import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import {MyButton} from 'vite.svg'
import MyComponent from './pages/react-class/ch-2/in-class/MyComponent'
import Looping1 from './pages/react-class/ch-2/in-class/Looping1'
import WithFragment from './pages/react-class/ch-2/in-class/WithFragment'
import WithoutFragment from './pages/react-class/ch-2/in-class/WithoutFragment'
import StateExample from './pages/react-class/ch-3/in-class/StateExample'
import MyComponment from './pages/react-class/ch-3/in-class/MyComponent'
import { Propsexample } from './pages/react-class/ch-3/in-class/Propsexample'
import Functionex from './pages/react-class/ch-3/in-class/Functionex'
import PrrExample from './pages/react-class/ch-3/in-class/PrrExample'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   
      <PrrExample/>
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
