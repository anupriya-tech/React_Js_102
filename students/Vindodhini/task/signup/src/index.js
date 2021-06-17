import React from 'react';
import ReactDOM from 'react-dom';


class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city: '',
      statename: '',
      country: ''
    };
    this.handleChangecity = this.handleChangecity.bind(this);
    this.handleChangestatename = this.handleChangestatename.bind(this);
    this.handleChangecountry = this.handleChangecountry.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  // handleChange(event){
  //   this.setState({value: event.target.value});
  // }
  handleChangecity(stateName, event) {
    this.setState({ city: event.target.value });
}
handleChangestatename(stateName, event) {
  this.setState({ state: event.target.value });
}
handleChangecountry(stateName, event) {
  this.setState({ country: event.target.value });
}
  handlesubmit(e){
    alert('Successfully Registered' + this.state.city);
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handlesubmit}>
        <label>
          City:
         
          <select value={this.state.city} name="city" onChange={(e)=>this.handleChangecity}>
            <option value="Madurai">Madurai</option>
            <option value="Trichy">Trichy</option>
            <option value="Villupuram">Villupuram</option>
            <option value="Chennai">Chennai</option>
          </select>
        </label>
        <label>
         State:
          <select value={this.state.statename} name="statename" onChange={(e)=>this.handleChangestatename}>
            <option value="Tamilnadu">Tamilnadu</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hydrabed">Hydrabed</option>
            <option value="Delhi">Delhi</option>
          </select>
        </label>
        <label>
          Country:
          <select value={this.state.country} name="country" onChange={(e)=>this.handleChangecountry}>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Africa">Africa</option>
            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

ReactDOM.render(
  <MyForm />
  ,document.getElementById("root") );