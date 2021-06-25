import React from 'react';
import ReactDOM from 'react-dom';

/*function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>This is too much money.</p>
  }
  return <p>No this is not too much money.</p>
}*/

const unitName = {
  r: 'rupees',
  d: 'dollar'
  //e: 'euro'
};

function toRupees(dollar){
  return (dollar*75);
}

function toDollar(rupees){
  return (rupees/75);
}


class CurrencyOne extends React.Component{
  constructor(props){
    super(props);
    //this.state = {currency :''}; not good idea because not sharable
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    //this.setState({currency : event.target.value});
    this.props.onCurrencyChange(event.target.value);
  }

  render(){
    //const currency = this.state.currency;
    const currency = this.props.currency;
    //const unit = this.props.unit;

    return(
      <fieldset>
        <legend>Select the currency you want to convert: </legend>
        <input value={currency} onChange={this.handleChange}></input>
        <select id="currency1">
          <option value={unitName['r']}>Rupee</option>
          <option value={unitName['d']}>Dollar</option>
        </select>
      </fieldset>
    );
  }
}

class CurrencyTwo extends React.Component{
  constructor(props){
    super(props);
    //this.state = {currency :''}; not good idea because not sharable
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    //this.setState({currency : event.target.value});
    this.props.onCurrencyChange(event.target.value);
  }

  render(){
    //const currency = this.state.currency;
    const currency = this.props.currency;
    //const unit = this.props.unit;

    return(
      <fieldset>
        <legend>Select the currency you want to convert: </legend>
        <input value={currency} onChange={this.handleChange}></input>
        <select id="currency2">
          <option value="rupee">Rupee</option>
          <option value="dollar">Dollar</option>
        </select>
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

  handleDollarChange(currency){
    this.setState({'unit' :'d',currency})
  }

  render(){
    const currency = this.state.currency;
    console.log(currency);
    const unit = this.state.unit;
    console.log(unit);

    const rupees = unit === 'd' ? toRupees(currency): currency;
    const dollar = unit === 'r' ? toDollar(currency) :currency;

    return(
      <div>
        <CurrencyOne currency={rupees} onCurrencyChange={this.handleRupeeChange}/>
        <CurrencyTwo currency={dollar} onCurrencyChange={this.handleDollarChange}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />
  ,document.getElementById("root") );