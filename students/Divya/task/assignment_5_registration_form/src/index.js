import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',password: '', name: '', mob: '', state: '', country: '', dist: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { name, email, password, mob, state, country,dist } = this.state;
    event.preventDefault();

    alert(`....The submitted details are....\n
    Name :${name}  
    Email : ${email}
    Password : ${password} 
    Mobile No :${mob}
    Country :${country}
    State : ${state}
    District : ${dist}
    `);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <h2>Sign up</h2>
        <label >
          Name :
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email address:
        <input type="email" required name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <label >
          Mobile No:
          <input type="number" name="mob" placeholder="Mobile number" value={this.state.mob} onChange={this.handleChange} />
        </label>
        <label>
          Country :
        <select name="country" placeholder="Country" value={this.state.country} onChange={this.handleChange}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="FRANCE">France</option>
            <option value="Germany">Germany</option>
            <option value="other">other</option>
          </select>
        </label>
        <label>
          State :
        <select name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} >
            <option value="Kerala">Kerala</option>
            <option value="Thamilnadu">Thamilnadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="other">other</option>
          </select>
        </label>
        <label>
          District :
        <select name="dist" placeholder="District" value={this.state.country} onChange={this.handleChange}>
            <option value="Kasaragod">Kasaragod</option>
            <option value="Kannur">Kannur</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Malapuram">Malapuram</option>
            <option value="Varansi">Varansi</option>
            <option value="Malleshwaram">Malleshwaram</option>
            <option value="other">other</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    )
  }
}

ReactDOM.render(
  <Form />
  , document.getElementById("root"));