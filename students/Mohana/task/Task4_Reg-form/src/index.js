import React from "react";
import ReactDOM from "react-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
        city: "",
        state: "",
        country: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "name") {
      this.setState((state) => ({
        name: event.target.value
      }));
    }
    
    if (event.target.name === "password") {
      this.setState((state) => ({
        password: event.target.value,
      }));
    }

    if (event.target.name === "city") {
      this.setState((state) => ({
          city: event.target.value,
      }));
    }

    if (event.target.name === "state") {
      this.setState((state) => ({
          state: event.target.value,
      }));
    }

    if (event.target.name === "country") {
      this.setState((state) => ({
          country: event.target.value,
      }));
    }

  }

  handleSubmit(event) {
    alert("You have successfully created");
    this.setState((state) => ({
      name: "",
      password: "",
      city: "" ,
      state: "" ,
      country: "" ,
    }));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}
            placeholder="Name" required />
          <br/>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}
            placeholder="password" required />
          <br/>
          <input type="text" name="city" value={this.state.city} onChange={this.handleChange}
            placeholder="City" required />
            <br/>
          <input type="text"name="state" value={this.state.state} onChange={this.handleChange}
            placeholder="State" required />
            <br/>
          <input type="text" name="country" value={this.state.country} onChange={this.handleChange}
            placeholder="Country" required /><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>,
  document.getElementById("root")
);
