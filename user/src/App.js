import React,{Component} from 'react';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state={
      user:" "
    }
  }
  onHandleChange=(e)=>{
    let user = this.state.user
    user=e.target.value
    console.log(user)
    this.setState({
      user
    })
  }


render(){
  let user=this.state.user

  return (
    <div className ="App">
    <input type="text" onChange={this.onHandleChange}></input>

    <p>Hello {user}</p>      
    </div>
    
  );
}
}

export default App;
