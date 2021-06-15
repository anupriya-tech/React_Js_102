import React, {Component} from 'react';
import './App.css';

class App extends Component

{

state={loggedin:false,username:"Aman Aggarwal"};

logouthandler=(e)=>
    {
      this.setState({loggedin:false});

    }



loginhandler=(e)=>
    {
      e.preventDefault();
 
    const formdata={
    email:this.lemail,
    password:this.lpassword
    };
    
    if(formdata.email=="amanaggarwal044" && formdata.password=="1234")
    {
      this.setState({loggedin:true});
      var myname=this.state.username;
      alert("Login Successfull... \n\n Welcome Mr. "+myname);

    }
    else if(formdata.email==null && formdata.password==null)
{
  
  alert("Please enter the data in both fields");
}
    else
    {

      alert("Invalid username and password");
    }
    
        }





render(){
    
return (
<div>
{ this.state.loggedin?
<div>
  <h1>Hello {this.state.username}. Glad to have you back</h1>
<button onClick={this.logouthandler}>Logout</button>


</div>




:
<div className="register">
                <div className="row">
                    <div className="col-md-3 register-left">
                       
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        
                        <h2 style={{fontWeight:"bold"}}>Welcome</h2>
                        <p></p>
                       
                        
                                            </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">LogIn</a>
                            </li>
                            
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Please enter your credentials</h3>
                                <div className="row register-form">

                                <div className="col-md-8 offset-md-4">
                                        
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Username *"
                                            onChange={e=>this.lemail=e.target.value}  />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" 
                                             
                                             onChange={e=>this.lpassword=e.target.value} />
                                       
                                        </div>
                    
                                        <h4 className="text-danger">{this.state.err}</h4>
                                 


                                        <input type="submit" className="btnRegister"  value="LogIn" 
                                        onClick={this.loginhandler}
                                        />
                                   </div>
                                  
                              </div>
                            </div>
                          
                        </div>
                    </div>
                </div>

            </div>

    }  
    </div>
    );
}
}

export default App;