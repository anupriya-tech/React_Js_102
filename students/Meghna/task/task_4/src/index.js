import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Returns a stateful value, and a function to update it.

function SayHello(props){
    console.log("props."+props.isTrue+props.user)
    if(props.isTrue && props.user !== "")
    {
      return (<h1>Welcome {props.user} !!!</h1>);
    }else{
      return null;
    }
}

function FromComponentWithHook(){
  //this.state
  const[user,setUser]  = useState({name:'',pwd:''});
  const[isLogin,loggedIn]  = useState(false);
  let btn;

  const handleUpdateUser = (event) => {
    //console.log(event.target.value);
    const {name,value} = event.target;

    console.log({[name]:value});
    //setUser({name:"",pwd:""});
    setUser({ ...user, [name]:value});
  }

  const handleSubmit = (event) => {
    if( user.name === "" && user.pwd === ""){
      alert("Please Do Login");
    }else{
      if(!isLogin){
        alert ("You are Logged In Sucessfully....\n Name:" + user.name + "\n Password:" + user.pwd);
        loggedIn(isLogin => !isLogin)
        event.preventDefault();
      }else{
        event.preventDefault();
        console.log("coming to submit",isLogin)
        loggedIn(isLogin => !isLogin)
        setUser({name:'',pwd:''});
      }
    }
  }

  {
    (!isLogin) ? btn = "Login" : btn = "Logout"
  }

  return(
    <form onSubmit={handleSubmit}>
    <SayHello isTrue={isLogin} user={user.name}/>
    <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleUpdateUser} />
    </label>
    <label>
          Pwd:
          <input type="text" name="pwd" value={user.pwd} onChange={handleUpdateUser} />
    </label>
    <input type="submit" value={btn}></input>
    </form>
  );
}

ReactDOM.render(
  <FromComponentWithHook />
  ,document.getElementById("root") );