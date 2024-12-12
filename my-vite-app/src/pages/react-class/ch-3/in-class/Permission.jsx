import React, { Component, createContext } from 'react'; 

const { Provider, Consumer } = createContext('permissions'); 

export class Permission extends Component {
state = {
first: true,
second: false,
third: true
}; 
 
render() {
return (
<Provider value={this.state}>
    {this.props.children}
    </Provider> 
); 
} 
} 
  
export default Permission