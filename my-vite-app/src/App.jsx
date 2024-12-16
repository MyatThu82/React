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
import { Propsexample } from './pages/react-class/ch-3/in-class/Propsexample'
import Functionex from './pages/react-class/ch-3/in-class/Functionex'
import PrrExample from './pages/react-class/ch-3/in-class/PrrExample'
import MyComponment from './pages/react-class/ch-3/in-class/MyComponent'
import Context from './pages/react-class/ch-3/in-class/Context'
import First from './pages/react-class/ch-3/in-class/First'
import Second from './pages/react-class/ch-3/in-class/Second'
import Example from './pages/react-class/ch-4/Example'
import Example2 from './pages/react-class/ch-4/Example2'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
        <Example2/>
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
