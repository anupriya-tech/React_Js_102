import React, { useState } from 'react';
import './index.css'

const initState = {
    userName: "",
    userEmail: "",
    userContact: "",
    userAddress: {
      addLineOne: "",
      addLineTwo: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    },
    reviewflag: false
  };
  
  /* Class Based object for implementing the user Registeration   */
  
  class Register extends React.Component{
  
    constructor(props){
      super(props);
      this.state = initState;
  
      this.handleFormChange = this.handleFormChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleEditButton = this.handleEditButton.bind(this)
      this.handleRegisterButton = this.handleRegisterButton.bind(this)
  
    } 
    
    /* Handleing the changes ouccered on any element of form */
  
    handleFormChange(e){
      let {name,value} = e.target;
  
      if(name.indexOf('userAddress_') !== -1){
      // this.setState({[this.state.userAddress.addLineOne]:"sss"})
        name = name.split("_")[1]
  
        // this.state.userAddress.{name] = value;   
          this.setState({userAddress: {...this.state.userAddress, [name]:value}})
        return;
      }
      this.setState({...this.state, [name]:value})
    }
    
    /* handle registeration form submission and enable preview */
  
    handleFormSubmit(){
      this.setState({reviewflag: true})
    }
    
    
    handleEditButton(){
      this.setState({reviewflag: false})
    }
  
    handleRegisterButton(){
      alert("You are registered successfully!!")
      this.setState(initState);
    }
  
  
    /* Rendering the final component */
    render(){
      if(this.state.reviewflag){
        return(
          <div className="AppContainer">
            <h3>Please review the deatails and click register if the details are correct or click edit to go back and edit details.</h3>
            <p>Full Name: <strong>{this.state.userName}</strong></p>
            <p>Email: <strong>{this.state.userEmail}</strong></p>
            <p>Mobile: <strong>{this.state.userContact}</strong></p>
            <p>Address: <strong>{this.state.userAddress.addLineOne}<br/>&emsp;&emsp;&emsp;&emsp;{this.state.userAddress.addLineTwo}</strong></p>
            <p>City:  <strong>{this.state.userAddress.city}</strong></p>
            <p>State:  <strong>{this.state.userAddress.state}</strong></p>
            <p>Country:  <strong>{this.state.userAddress.country}</strong>&emsp;&emsp;PIN COde: <strong>{this.state.userAddress.pinCode}</strong></p>
            <div className="layout-twoCol">
              <div className="btn-container">
                <button onClick={this.handleEditButton}>Edit</button>
              </div>
              <div className="btn-container">
                <button onClick={this.handleRegisterButton}>Register</button>
              </div>
            </div>
          </div>
        )
      }
      return(
        <div className="AppContainer">
          <h1>User Registeration Form</h1>
          <form onSubmit={this.handleFormSubmit}>
  
            <div className="layout-oneCol">
              <div>
                <label> Full Name: 
                  <input type='text' name="userName" onChange={this.handleFormChange} value={this.state.userName} placeholder="Your Full Name" />
                </label>
              </div>
            </div>
  
            <div className="layout-twoCol">
              <div>
                <label> Email Address: 
                  <input type='email' name="userEmail" onChange={this.handleFormChange} value={this.state.userEmail} placeholder="your@email.com" />
                </label>
              </div>
              <div>
                <label> Mobile Number: 
                  <input type='text' name="userContact" pattern="\d*" maxlength="10" minLength="10" onChange={this.handleFormChange} value={this.state.userContact} placeholder="9876543210" />
                </label>
              </div>
            </div>
  
            <div className="layout-oneCol">
              <div>
                <label> Address Line 1: 
                  <input type='text' name="userAddress_addLineOne" onChange={this.handleFormChange} value={this.state.userAddress.addLineOne} placeholder="House No., Floor, Appartment"/>
                </label>
              </div>
            </div> 
  
            <div className="layout-oneCol">
              <div>
                <label> Address Line 2: 
                  <input type='text' name="userAddress_addLineTwo" onChange={this.handleFormChange} value={this.state.userAddress.addLineTwo} placeholder="Street, locality, Society" />
                </label>
              </div>
            </div> 
  
            <div className="layout-twoCol">
              <div>
                <label> City: 
                  <input type='text' name="userAddress_city" onChange={this.handleFormChange} value={this.state.userAddress.city} placeholder="Enter City" />
                </label>
              </div>
              <div>
                <label> State: 
                  <input type='text' name="userAddress_state" onChange={this.handleFormChange} value={this.state.userAddress.state} placeholder="Enter State" />
                </label>
              </div>
            </div> 
  
            <div className="layout-twoCol">
              <div>
                <label> Country: 
                  <select name="userAddress_country" onChange={this.handleFormChange} value={this.state.userAddress.country}>
                      <option value="">Select Your Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="UAE">UAE</option>
                    </select>
                </label>
              </div>
              <div>
                <label> Pin Code: 
                  <input type='text' name="userAddress_pinCode" onChange={this.handleFormChange} value={this.state.userAddress.pinCode} placeholder="Enter PIN Code" />
                  
                </label>
              </div>
            </div> 
            <div className="layout-oneCol">
              <div className="btn-container">
                <input type="submit" value="submit" />
              </div>             
            </div>
          
          </form>
        </div>
      )
    }
  }

  ReactDOM.render(
    <Register />
    ,document.getElementById("root")
     );

