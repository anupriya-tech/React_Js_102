import './App.css';
import reactDom from 'react-dom';
import React from 'react';


class CurrencyRow extends React.Component{
  constructor(props){
    super(props);
    /* this.props.onRowOptionChange = {
      amount: this.props.amount,
      currency: this.props.currency
    } */
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleCurrencyChange(e){
    this.props.onRowOptionChange({amount: this.props.amount, currency: e.target.value});
  }

  handleAmountChange(e){
    this.props.onRowOptionChange({amount: e.target.value, currency: this.props.currency});
  }
  

  render(){
    return(
      <div className='currencyRow'>
        <div>
          <input type="number" value={this.props.amount} onChange={this.handleAmountChange} />
        </div>
        <div>
          <select value={this.props.currency} onChange={this.handleCurrencyChange}>
            <option value="INR">Indian Rupee (&#8377;)</option>
            <option value="USD">US Dollar ($)</option>
            <option value="EUR">Euro (&euro;)</option>
            <option value="GBP">Pound Sterling(&#163;)</option>
          </select>
        </div>
      </div>
    )
  }
}


class CurrencyCalculator extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      optionsFrom: {
        amount: 1,
        currency: 'INR'
      },
      optionsTo: {
        amount: 1,
        currency: 'USD'
      }
    };

    this.handleCurrencyRowChangeOne = this.handleCurrencyRowChangeOne.bind(this);
    this.handleCurrencyRowChangeTwo = this.handleCurrencyRowChangeTwo.bind(this);
    this.currencyConverter = this.currencyConverter.bind(this);
  } 
  
  handleCurrencyRowChangeOne(currencyRowObj){
    
    let convertedAmt = this.currencyConverter(currencyRowObj.currency, this.state.optionsTo.currency, currencyRowObj.amount);

    convertedAmt.then(function(newAmt) {

      return newAmt;
      /* this.setState({
        optionsFrom: {amount:newAmt, currency:this.state.optionsTo.currency}, 
        optionsFrom:{amount:currencyRowObj.amount, currency:currencyRowObj.currency}
      }) */

    })
    console.log(newAmt)
    
  }

  handleCurrencyRowChangeTwo(currencyRowObj){
    
    let convertedAmt = this.currencyConverter(currencyRowObj.currency, this.state.optionsFrom.currency, currencyRowObj.amount)

    const newAmt = convertedAmt.then(function(newAmt) {
      return newAmt;
    })
    console.log(newAmt)
      /* this.setState({
        optionsTo: {amount:currencyRowObj.amount, currency:currencyRowObj.currency}, 
        optionsFrom: {amount:newAmt, currency:this.state.optionsFrom.currency}
      }) */

    
    // console.log(convertedAmt)
    
  }

  currencyConverter(currencyFrom, currencyTo, amountFrom){
    return fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'+currencyFrom.toLowerCase()+'.json')
      .then(function(response){ return response.json()})
      .then(function(jsonData) {
        
        const amt = jsonData[currencyFrom.toLowerCase()][currencyTo.toLowerCase()] * amountFrom;
        return amt;
      })
      .catch((error) => {
        // handle your errors here
        alert("Error Occured: "+error)
      })
      
  }
  
  render(){
    const opOne = this.state.optionsFrom;
    const opTwo = this.state.optionsTo;

    // console.log(this.state)
    // this.currencyConverter();
    /* let eur= 
    console.log(eur) */
    return(
      <div className="AppContainer">
        <CurrencyRow amount={opOne.amount} currency={opOne.currency} onRowOptionChange={this.handleCurrencyRowChangeOne} />
        <CurrencyRow amount={opTwo.amount} currency={opTwo.currency} onRowOptionChange={this.handleCurrencyRowChangeTwo} />
      </div>
    )
  }
}

export default CurrencyCalculator;