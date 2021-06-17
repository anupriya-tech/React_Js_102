import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {Username:'', password:'', city:'', state:'', country:''};
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }


  handlesubmit(event){
    const {name, password, city, state, country} = this.state;
    alert(`please check your details. \n
    Name : ${name}
    Password : ${password}
    city : ${city}
    state : ${city}
    country: ${city}
    `);
    event.preventDefault();
  }

  handleChange(event){
    this.setState({ [event.target.name] : event.target.value });
  }
  render(){
    return(
        
      <form onSubmit={this.handlesubmit}>
        <div className="loginlogout">
          <h1>User Registration Form</h1>
          <label>
            Username :  <input name='name' placeholder='Username' value={this.state.name} onChange={this.handleChange}/>
          </label>
          <br /><br />
          <label>
            Password :  <input name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
          </label><br /><br />
          <label>
            city :   <input name='city' placeholder='city' value={this.state.city} onChange={this.handleChange}/>
          </label><br /><br />
          <label>
            state :  <input name='state' placeholder='state' value={this.state.city} onChange={this.handleChange}/>
          </label><br /><br />
          <label>
            country :  <input name='country' placeholder='country' value={this.state.city} onChange={this.handleChange}/>
          </label><br /><br />
         <input type="submit" class="btn btn-primary" value="Login" />   <input type="submit" class="btn btn-primary" value="Logout" />

        </div>
      
      </form>
    );
  }

}

ReactDOM.render(
  <React.StrictMode>
    <MyForm />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
