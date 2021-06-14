import React from 'react';
import ReactDOM  from 'react-dom';

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block'
};
const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};
const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%', 
  fontSize: '15px',
  color: 'white',
  display: 'block'
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px', 
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};


class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.setState({value: event.target.value1});
  }

  handlesubmit(event){
    alert('Are you sure you want to submit?' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handlesubmit} style={formStyle}>
        <label style={labelStyle}>
          User Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} style={inputStyle}/>
        </label>
        <label style={labelStyle}>
          Password:
          <input type="password" value={this.state.value1} onChange={this.handleChange} style={inputStyle}/>
        </label>
        <button type="submit" value="Submit" style={submitStyle}> Sign-In </button>
        <button type="submit" value="Submit" style={submitStyle}> Sign-Off </button>
      </form>
    );
  }

}

ReactDOM.render(
  <MyForm />
  ,document.getElementById("root") ); 