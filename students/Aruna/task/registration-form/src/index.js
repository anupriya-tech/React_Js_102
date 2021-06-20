import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Registration Form for Student

class RegistrationForm extends React.Component{
  constructor(props){
    super(props);
      this.state={
        firstName:" ",
        lastName:" ",
        mobileNo: " ",
        address:" "
      }
        this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(reg){
    this.setState({value: reg.target.value});
    alert("Successfully submitted")
  }
  render(){
    return(
      <form><b>
        <fieldset><h2> Student Registration form</h2></fieldset>
        
        <table>
          <label> 
            <tr>FirstName      : 
              <td><input type='fn ' value={this.state.value}></input></td>
              </tr>                      
          </label><br></br>

          <label><tr>LastName   :
            <td><input type='ln ' value={this.state.value}></input> </td>
            </tr>  
          </label><br></br>

          <label> <tr>MobileNo :
            <td> <input type='mno ' value={this.state.value}></input></td>
            </tr>        
          </label><br></br>

          </table>

          <label> 
            <table>
              <tr>Address:   </tr>                 
        <tr> <input type='adr ' value={this.state.value}></input><br></br></tr>
        <tr> <input type='adr ' value={this.state.value}></input><br></br></tr>
        <tr> <input type='adr ' value={this.state.value}></input><br></br></tr>
        <tr> <input type='adr ' value={this.state.value}></input><br></br></tr>
            </table> 
      
          </label>  </b><br></br>
 <button onClick={this.handleSubmit}>Submit</button>
      </form>
     
    )
  }
  
}
ReactDOM.render(
  <RegistrationForm/>, document.getElementById('root')
);
