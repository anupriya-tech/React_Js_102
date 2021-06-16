import './App.css';
import reactDom from 'react-dom';
import React from 'react';


/* Class Based Component For 1 set of options i.e. 1 Imput Box for Currency Amount and 1 Select box for Currency */

class CurrencyRow extends React.Component{
  constructor(props){
    super(props);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  /* Handeling the Change Event of Selct Box i.e. Currency */

  handleCurrencyChange(e){
    this.props.onRowOptionChange({amount: this.props.amount, currency: e.target.value});
  }

  /* Handeling the Change Event of Input Box i.e. Amount */

  handleAmountChange(e){
    this.props.onRowOptionChange({amount: e.target.value, currency: this.props.currency});
  }
  
/* Rendering the component */

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

/* Class Based object for implementing the currency converter  */

class CurrencyCalculator extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      optionsFrom: {
        amount: 1,
        currency: 'INR'
      },
      optionsTo: {
        amount: this.currencyConverter('USD', 'INR', 1),
        currency: 'USD'
      }
    };

    this.handleCurrencyRowChangeOne = this.handleCurrencyRowChangeOne.bind(this);
    this.handleCurrencyRowChangeTwo = this.handleCurrencyRowChangeTwo.bind(this);
    this.currencyConverter = this.currencyConverter.bind(this);
  } 
  
  /* Handleing the changes if ouccered in the first CurrencyRow Componenent */

  handleCurrencyRowChangeOne(currencyRowObj){
    
    let convertedAmt = this.currencyConverter(currencyRowObj.currency, this.state.optionsTo.currency, currencyRowObj.amount);

      this.setState({
        optionsFrom: {amount:currencyRowObj.amount, currency:currencyRowObj.currency}, 
        optionsTo:{amount:convertedAmt, currency:this.state.optionsTo.currency}
      })

    
  }

  /* Handeleing the changes if ouccered in the Second CurrencyRow Componenent */

  handleCurrencyRowChangeTwo(currencyRowObj){
    
    let convertedAmt = this.currencyConverter(currencyRowObj.currency, this.state.optionsFrom.currency, currencyRowObj.amount)

      this.setState({
        optionsFrom: {amount:convertedAmt, currency:this.state.optionsFrom.currency},
        optionsTo: {amount:currencyRowObj.amount, currency:currencyRowObj.currency}
      })

  }

  /* Making the conversions and return the converted Amount
    @returns number
  */
  currencyConverter(currencyFrom, currencyTo, amountFrom){
    
    const ExchangeRates = {
      EUR: { INR: 88.95, GBP: 0.86, USD: 1.21, EUR: 1 },
      USD: { INR: 73.36, GBP: 0.71, USD: 1, EUR: 0.82 },
      INR: { INR: 1, GBP: 0.0097, USD: 0.014, EUR: 0.011 },
      GBP: { INR: 103.31, GBP: 1, USD: 1.41, EUR: 1.16 }
    }
      return ExchangeRates[currencyFrom][currencyTo] * amountFrom;
  }
  
  /* Rendering the final component */
  render(){

    return(
      <div className="AppContainer">
        <h1>Currency Converter</h1>
        <CurrencyRow amount={this.state.optionsFrom.amount} currency={this.state.optionsFrom.currency} onRowOptionChange={this.handleCurrencyRowChangeOne} />
        <CurrencyRow amount={this.state.optionsTo.amount} currency={this.state.optionsTo.currency} onRowOptionChange={this.handleCurrencyRowChangeTwo} />
      </div>
    )
  }
}

export default CurrencyCalculator;