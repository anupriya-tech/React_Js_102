import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Hello World!!!</h1>
      </div>
    );
  }
} 

function Welcome(props){
  return <h1>Hello World!!!, {props.name} </h1>
}

const element1 = <div />;
const element2 = <Welcome name="Suraj"/>;

//ReactDOM.render(<App />,document.getElementById("root") );
ReactDOM.render(element2,document.getElementById("root") );