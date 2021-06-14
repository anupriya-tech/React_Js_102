import React from 'react';
import ReactDOM from 'react-dom';

//forms always maintain state
//by using controlled component
//controlled vs uncontrolled component
//cc - react handles data
//ucc - DOM handles data

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handlesubmit(event){
    alert('Are you sure you want to submit?' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handlesubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

ReactDOM.render(
  <MyForm />
  ,document.getElementById("root") );