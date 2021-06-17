import React from 'react';
import ReactDOM from 'react-dom';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  }
  handleChange(e) {
    let fields = this.state.fields;
    console.log(fields);
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    

  }

  submituserRegistrationForm(e) {
   
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
    }
  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }


    this.setState({
      errors: errors
    });
    return formIsValid;


  }


  render(){
    return(
    <div id="main-registration-container">
    <div id="register">
    <h3>Registration page</h3>
    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
    <label>Name</label>
    <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
    <br/>
    <label>Password</label>
        <input type="password" name="pwd" value={this.state.fields.pwd} onChange={this.handleChange} />
       <br/>
        <label>City</label>
    <input type="text" name="city" value={this.state.fields.city} onChange={this.handleChange} />
    <br/>
    <label>State</label>
    <input type="text" name="state" value={this.state.fields.state} onChange={this.handleChange} />
    <br/>
    <label>Country</label>
    <input type="text" name="country" value={this.state.fields.country} onChange={this.handleChange} />
    <br/>

        <input type="submit" className="button"  value="Register"/>
    </form>
    </div>
    </div>
    );
  }
}
ReactDOM.render(<RegisterForm/>,document.getElementById('root'));