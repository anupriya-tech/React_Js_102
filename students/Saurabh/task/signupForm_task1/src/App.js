import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

     this.state = {
      firstName: "",
      lastName: "",
      password: "",
      gender: "",
      address: { city: '',
                 states: '',
                 country: '' 
                }
     }
     this.handleSubmit=this.handleSubmit.bind(this)

  }

  firsthandler = (event) => {
    this.setState({
        firstName: event.target.value
    })
}
lasthandler = (event) => {
    this.setState({
        lastName: event.target.value
    })
}
passwordhandler = (event) => {
    this.setState({
        password: event.target.value
    })
}

genderhandler = (event) => {
    this.setState({
        gender: event.target.value
    })
}
genderhandler = (event) => {
  this.setState({
      gender: event.target.value
  })
}

cityhandler = (event) => {
  this.setState({
      address: {
        city: event.target.value
      }
  })
}

stateshandler = (event) => {
  this.setState({
    address: {
      states: event.target.value
    }
  })
}

countryhandler = (event) => {
  this.setState({
    address: {
      country: event.target.value
    }
  })
}


handleSubmit = (event) => {
  alert(`firstname: ${this.state.firstName}, Lastname: ${this.state.lastName} Registered Successfully !!!!`)
  console.log(this.state);
event.preventDefault()
  
}


  render() {

    return(
      <div>
       <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>Address :</label> <input type="text" value={this.state.address.city} onChange={this.cityhandler} placeholder="City" /><br />
                    <input type="text" value={this.state.address.states} onChange={this.stateshandler} placeholder="State" /><br />
                    <input type="text" value={this.state.address.country} onChange={this.countryhandler} placeholder="Country" /><br />
                    <input type="submit" value="Submit" />
                </form>
      </div>
    );
  }
}

export default App;