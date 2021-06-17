import React from 'react';
import ReactDOM from 'react-dom';
import "./signup.css"
class SignupForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={name:'',mob:'',state:'',country:'',dist:''}
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name+" "+value);
    this.setState({[name]:value});
  }
  handleSubmit(event)
  {
    alert(`Name :${this.state.name}
    Mobile No :${this.state.mob}
    Country :${this.state.country}
    State : ${this.state.state})
    District : ${this.state.dist}`)
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} >
      <div class="signup">
       
        <label >
          Name :
          <input type="text" name="name"  onChange={this.handleChange}/>
        </label>
        <label >
          Mobile No:
          <input type="number" name="mob" value={this.state.mob} onChange={this.handleChange}/>
        </label>
        <div class="dd">
        <label class="lbl">
          Country :
        <select name="country"  value={this.state.country} onChange={this.handleChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
        </select>
        </label>
        <label class="lbl">
          State :
        
        <select name="state" value={this.state.state} onChange={this.handleChange} >
          <option value="Maharashtra">Maharashtra</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Karnataka">Karnataka</option>
        </select>
        </label>
        <label class="lbl">
          District :
         
        <select name="dist" value={this.state.country}onChange={this.handleChange}>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagar">Nagar</option>
        </select>
        </label>
        </div>
        <button> Signup </button>
      </div>
      </form>
    );
  }
  
}
ReactDOM.render(
  <SignupForm/>,
  document.getElementById("root")
)