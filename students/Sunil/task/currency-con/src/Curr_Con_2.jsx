import React from 'react';
import ReactDOM from 'react-dom';

function CurrencyMsg(props){
  if(props.rupees>=100)
  return <p>Its more</p>
  else return <p>Its less</p>
}

const UnitName={
  'r':'rupees',
  'd':'dollar'
}

function toRupee(dollar){
  return dollar*75;  
}

function toDollar(rupee){
  return rupee/75;
}

class CurrencyInp extends React.Component{
  constructor(props){
    super(props);
    this.handlevent=this.handlevent.bind(this);
  }
  
  handlevent(event){
    this.props.currencyhandler(event.target.value);
  } 
  render(){
    const currency=this.props.currency;
    const unit=this.props.unit;
    return(
      <fieldset>
        <legend>Enter the currency in {UnitName[unit]}: </legend>
        <input value={currency} onChange={this.handlevent}></input>
        <CurrencyMsg rupees={currency}/>
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state={currency:'',unit:'r'};
    this.handleDollarChange=this.handleDollarChange.bind(this);
    this.handleRupeeChange=this.handleRupeeChange.bind(this);  
  }
  handleRupeeChange(currency){
    this.setState({'unit':'r',currency});
  }

  handleDollarChange(currency){
    this.setState({'unit':'d',currency});
  }

  render() { 
    const currency=this.state.currency;
    const unit=this.state.unit;
    const rupees=unit==='d'?toRupee(currency):currency;
    const dollar=unit==='r'?toDollar(currency):currency;
    return (  
        <div>
        <CurrencyInp unit='r' currency={rupees} currencyhandler={this.handleRupeeChange}/>
        <CurrencyInp unit='d' currency={dollar} currencyhandler={this.handleDollarChange}/>
        </div>
    );
  }
}
 

ReactDOM.render(
  <Calculator/>,document.getElementById("root"));


  
  
  
