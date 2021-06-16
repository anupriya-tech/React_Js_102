import React from 'react';
import ReactDOM from 'react-dom';

class CountryForm extends React.Component{
function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>This is too much money.</p>
  }
  return <p>No this is not too much money.</p>
}

const unitName = {
  r: 'rupees',
  d: 'dollar'
};

function toRupees(dollar){
  return (dollar*75);
}

function toDollar(rupees){
  return (rupees/75);
}

class CurrencyInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'India'};
    //this.state = {currency :''}; not good idea because not sharable
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    //this.setState({currency : event.target.value});
    this.props.onCurrencyChange(event.target.value);
  }

  render(){
    //const currency = this.state.currency;
    const currency = this.props.currency;
    const unit = this.props.unit;

    return(
      <fieldset>
        <legend>Enter your currency in {unitName[unit]}: </legend>
        <input value={currency} onChange={this.handleChange}></input>
        <CurrencyMessage rupees={currency} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {currency :'',unit: 'r'};
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.handleRupeeChange = this.handleRupeeChange.bind(this);
  }

  handleRupeeChange(currency){
    this.setState({'unit' :'r',currency})
  }

  handlesubmit(event){
    alert('Are you sure you want to submit? ' + this.state.value);
    event.preventDefault();
  handleDollarChange(currency){
    this.setState({'unit' :'d',currency})
  }


  render(){
    const currency = this.state.currency;
    const unit = this.state.unit;
    const rupees = unit === 'd' ? toRupees(currency): currency;
    const dollar = unit === 'r' ? toDollar(currency) :currency;

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
      <div>
        <CurrencyInput unit='r' currency={rupees} onCurrencyChange={this.handleRupeeChange}/>
        <CurrencyInput unit='d' currency={dollar} onCurrencyChange={this.handleDollarChange}/>
      </div>
    );
  }

}

ReactDOM.render(
  <CountryForm />
  <Calculator />
  ,document.getElementById("root") );