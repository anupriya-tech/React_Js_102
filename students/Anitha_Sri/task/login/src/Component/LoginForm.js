import React from "react";
import ReactDOM from "react-dom"
//

class MyForm extends React.Component{

constructor(props){
super(props)
this.state={value:""};
this.state={pass:""};
this.handleuserName= this.handleuserName.bind(this)
this.handlePassword= this.handlePassword.bind(this)
this.loginbtn=this.loginbtn.bind(this)
this.logoutbtn=this.logoutbtn.bind(this)
}


handleuserName(event){
this.setState({value:event.target.value})
}

handlePassword(event){
    this.setState({pass:event.target.pass})
}

loginbtn(event){
    alert("Succussfully loggedin"+ " "+this.state.value)
    event.preventDefault()
    
}

logoutbtn(event){
    alert("Please login"+" "+this.state.value)
    event.preventDefault()
}

render(){
return(
<form onSubmit={this.loginbtn}>
<input type="username" placeholder="Enter UserName" value={this.state.value} onChange={this.handleuserName}/><br></br>
<input type="password" placeholder="Enter password" pass={this.state.pass} onChange={this.handlePassword}/><br></br>
<button onClick={this.loginbtn}>Login</button>
<button onClick={this.logoutbtn}>Logout</button>

</form>

)
}
}

ReactDOM.render(<MyForm/>,document.getElementById('root'))
export default MyForm