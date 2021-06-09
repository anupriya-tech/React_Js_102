import React from 'react';
import ReactDOM from 'react-dom';

/* class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Hello World!!!</h1>
      </div>
    );
  }
} */

function App(props){
  return <h1>Hello World!!!, {props.name} </h1>
}

ReactDOM.render(<App name="Rajesh"/>,document.getElementById("root") );