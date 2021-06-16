import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyBorder(props){
  return(
    <div className={'MyBorder MyBorder-'+props.color}>
      {props.children}
    </div>
  );
}

function MyDialogBox(){
  return(
    <div>
      <MyBorder color="green">
        <h1 className="MyDialog-title">Welcome to first Dialog.</h1>
        <p className="MyDialog-Message">This is from dialog message.</p>
      </MyBorder>
      <MyBorder color="red">
        <h1 className="MyDialog-title">Welcome to first Dialog.</h1>
        <p className="MyDialog-Message">This is from dialog message.</p>
      </MyBorder>
      <MyBorder color="blue">
        <h1 className="MyDialog-title">Welcome to first Dialog.</h1>
        <p className="MyDialog-message">This is from dialog message.</p>
      </MyBorder>
    </div>
  );
}

ReactDOM.render(
  <MyDialogBox />
  ,document.getElementById("root") );