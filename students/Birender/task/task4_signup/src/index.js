import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      email: "",
      password: "",
      address: {
        city: "",
        statee: "",
        country: "",
      },
      flag: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "user_name") {
      this.setState((state) => ({
        user_name: event.target.value,
        // email: event.target.value,
        // password: event.target.value,
        // //city=address.city,
        // city: event.target.value,
        // statee: event.target.value,
        // country: event.target.value,
      }));
    }
    if (event.target.name === "email") {
      this.setState((state) => ({
        email: event.target.value,
      }));
    }
    if (event.target.name === "password") {
      this.setState((state) => ({
        password: event.target.value,
      }));
    }

    if (event.target.name === "city") {
      this.setState((state) => ({
        address: {
          city: event.target.value,
        },
      }));
      console.log(event.target.value);
    }

    if (event.target.name === "statee") {
      this.setState((state) => ({
        address: {
          statee: event.target.value,
        },
      }));
      console.log(event.target.value);
    }

    if (event.target.name === "country") {
      this.setState((state) => ({
        address: {
          country: event.target.value,
        },
      }));
      console.log(event.target.value);
    }
  }

  handleSubmit(event) {
    alert("You have successfully created your account");
    this.setState((state) => ({
      user_name: "",
      email: "",
      password: "",
      address: { city: "" },
      address: { statee: "" },
      address: { country: "" },
      flag: true,
    }));
    event.preventDefault();
  }

  render() {
    // if(this.state.flag){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/* User Name: */}
          <input
            type="text"
            name="user_name"
            value={this.state.user_name}
            onChange={this.handleChange}
            placeholder="Name"
            required
          />
          <br></br>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
            required
          />
          <br></br>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <br></br>
          <input
            type="text"
            name="city"
            value={this.state.address.city}
            onChange={this.handleChange}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="statee"
            value={this.state.address.statee}
            onChange={this.handleChange}
            placeholder="State"
            required
          />
          <input
            type="text"
            name="country"
            value={this.state.address.country}
            onChange={this.handleChange}
            placeholder="Country"
            required
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SignupForm />
  </React.StrictMode>,
  document.getElementById("root")
);
