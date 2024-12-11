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

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <StateExample/>
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
