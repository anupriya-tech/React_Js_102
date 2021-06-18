import userEvent from '@testing-library/user-event'
import React from 'react'
class Login extends React.Component{
constructor(props){
    super(props)
    this.state={value:""}
    this.state={password:""}
    this.handleUsername=this.handleUsername.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.handleLogin=this.handleLogin.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
}

handleUsername(event){
this.setState({value:event.target.value})

}
handlePassword(event){
    this.setState({pass:event.target.value})
}
handleLogin(login){
alert("Succussfully LoggedIn")
login.preventDefault()
}

handleLogout(login){
    alert("Succussfully LoggedOut")
    login.preventDefault()
    }
render(){
    return(
        <div>
<input type="username" value={this.state.value} onChange={this.handleUsername}/>
<br></br>
<input type="email" pwd={this.state.pass} onChange={this.handlePassword}/>
<br></br>
<button Onclick={this.handleLogin}>Login</button>
<button Onclick={this.handleLogout}>Logout</button>
</div>
    )
}

}
export default Login