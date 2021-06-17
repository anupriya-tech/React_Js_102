import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component{
            constructor(props){
            super(props);
            this.state={userid:'', password:''};
            this.handlersubmit=this.handlersubmit.bind(this);        
            this.handleruserid=this.handleruserid.bind(this);
            this.handlerpassword=this.handlerpassword.bind(this);
            }
          handleruserid(event){
                this.setState({userid:event.target.value});       
          } 

          handlerpassword(event){
            this.setState({password:event.target.value});
          }
           
          handlersubmit(event){
                alert('Username is:'+this.state.userid+ ' Password is: '+this.state.password);
          }        

        render(){
            return(               
                    <form onSubmit={this.handlersubmit}>
                        <label>Enter Userid:</label>    
                        <input type="text" value={this.state.userid} onChange={this.handleruserid} required/>
                        <label>Enter Password:</label> 
                        <input type="password" value={this.state.password} onChange={this.handlerpassword} required/>
                        <button>Submit</button>
                    </form>
                  );
         }
}          
ReactDOM.render( 
    <Login/>,document.getElementById("root")
);