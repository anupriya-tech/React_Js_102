import React from 'react';
import ReactDOM from 'react-dom';

class CountryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'India'};
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handlesubmit(event){
    alert('Are you sure you want to submit? ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handlesubmit}>
        <label>
          Please select one country out of list below: 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='USA'>USA</option>
            <option value='INDIA'>INDIA</option>
            <option value='UK'>UK</option>
            <option value='BALI'>BALI</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

ReactDOM.render(
  <CountryForm />
  ,document.getElementById("root") );