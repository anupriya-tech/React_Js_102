import React from 'react';
import ReactDOM from 'react-dom';

function LoginButton(props){
      return(<button onClick={props.onClick}>Login</button>);      
}

function LogoutButton(props){
  return(<button onClick={props.onClick}>Logout</button>);      
}

function loginpattern(){
  return(<form onSubmit={this.handlersubmit}>
                         <label>Enter Userid:</label>    
                        <input type="text" value={this.state.userid} onChange={this.handleruserid} required/>
                        <label>Enter Password:</label> 
                        <input type="password" value={this.state.password} onChange={this.handlerpassword} required/>
                    </form>);
}

function LoginForm(props){
  const iftrue=props.isloggedin;
  if(iftrue){
    return <loginpattern/>
  }
}
class Login extends React.Component{
            constructor(props){
            super(props);
            this.state={userid:'', password:'',loggedin:false};
            this.handlersubmit=this.handlersubmit.bind(this);        
            this.handleruserid=this.handleruserid.bind(this);
            this.handlerpassword=this.handlerpassword.bind(this);
            this.handlerlogin=this.handlerlogin.bind(this);
            this.handlerlogout=this.handlerlogout.bind(this);
            }
          handleruserid(event){
                this.setState({userid:event.target.value});       
          } 

          handlerpassword(event){
            this.setState({password:event.target.value});
          }
           
          handlersubmit(event){
                alert('Welcome '+this.state.userid+ ', You are successfully loggedin ');
          }    
          handlerlogin(){
            this.setState({loggedin: true});   
          }
          handlerlogout(){
            this.setState({loggedin: false});
          }  
          
         

        render(){
            let button;
            const isloggedin=this.state.loggedin;
            
            {isloggedin?button=<LoginButton onClick={this.handlerlogin}/>
            :
            button=<LogoutButton onClick={this.handlerlogout}/>
            }

            return(  
                    <div>
                    <LoginForm status={isloggedin}/>
                    {button}
                    </div>
                  );
         }
}          
ReactDOM.render( 
    <Login/>,document.getElementById("root")
);
