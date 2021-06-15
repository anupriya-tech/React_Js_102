import React from "react";
import ReactDOM from "react-dom";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      flag: true,
    };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChangeLogin(event) {
    event.target.name === "email"
      ? this.setState((state) => ({
          email: event.target.value,
        }))
      : this.setState((state) => ({
          password: event.target.value,
        }));
  }

  handlesubmit(event) {
    alert("You are logged in with Email ID : " + this.state.email);
    this.setState((state) => ({
      flag: false,
    }));
    event.preventDefault();
  }

  handleLogout() {
    alert("You are successfully logged out");
    this.setState((state) => ({
      email: "",
      password: "",
      flag: true,
    }));
  }

  render() {
    if (this.state.flag) {
      return (
        <form onSubmit={this.handlesubmit}>
          <label>
            User Name:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeLogin}
              placeholder="email"
              required
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    } else {
      return (
        <div className="AppContainer">
          <h3>Welcome {this.state.email}</h3>
          <p>
            <input type="button" value="Logout" onClick={this.handleLogout} />
          </p>
        </div>
      );
    }
  }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));
