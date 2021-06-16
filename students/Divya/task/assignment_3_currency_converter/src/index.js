import React from 'react';
import ReactDOM from 'react-dom';

class CurrencyConverter extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
  }
  handleChangeCurrency(event1) 
  {
    this.props.onChange(
      {
        amount: this.props.amount,
        currency: event1.target.value
      });
  }
  handleChangeAmount(event1) {
    this.props.onChange(
      {
        amount: event1.target.value,
        currency: this.props.currency
      });
  }
  render() 
  {
    return (
      <div>
        <input type="number" value={this.props.amount} onChange={this.handleChangeAmount} />
        <select value={this.props.currency} onChange={this.handleChangeCurrency}>
          <option value="inr">RUPEESE</option>
          <option value="usd">DOLLAR</option>
          <option value="euro">EURO (&euroo;)</option>
          <option value="dinar">DINAR</option>
        </select>
      </div>
    )
  }
}

class CurrencyCalculator extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      select1: {
        amount: 1,
        currency: 'inr'
      },
      select2: {
        amount: this.currencyConverter('usd', 'inr', 1),
        currency: 'usd'
      }
    };
    this.handleCurrencyConvert = this.handleCurrencyConvert.bind(this);
    this.currencyConverter = this.currencyConverter.bind(this);
  }


  handleCurrencyConvert(event) 
  {

    let amountConverted = this.currencyConverter(event.currency, this.state.select2.currency, event.amount);

    console.log("on if= " + this.state.select1.currency);

    if (this.state.select1.currency) 
    {
      this.setState({
        select1: { amount: event.amount, currency: event.currency },
        select2: { amount: amountConverted, currency: this.state.select2.currency }
      })
    }
    else 
    {
      this.setState({
        select1: { amount: amountConverted, currency: this.state.select1.currency },
        select2: { amount: event.amount, currency: event.currency }
      })
    }
  }

  currencyConverter(amountFrom, amountTo, cash) 
  {
    console.log("amountFrom= " + amountFrom + "\n amountTo= " + amountTo + "\n cash= " + cash);
    
    const ExchangeRates = {
      inr: { inr: 1, dinar: 0.0097, usd: 0.014, euro: 0.01 },
      usd: { usd: 1, inr: 73.36, dinar: 0.71, euro: 0.82 },
      euro: { euro: 1, inr: 88.95, dinar: 0.86, usd: 1.21 },
      dinar: { dinar: 1, inr: 194.53, usd: 2.65, euro: 2.19 }
    }
    const cashNew = ExchangeRates[amountFrom][amountTo] * cash;
    console.log("newcash is= " + cashNew);
    
    return (cashNew);

  }

  render() 
  {
    return (
      <fieldset>
        <legend>.....CURRENCY CONVERTER.....</legend>
        <CurrencyConverter amount={this.state.select1.amount} currency={this.state.select1.currency} onChange={this.handleCurrencyConvert} />
        <CurrencyConverter amount={this.state.select2.amount} currency={this.state.select2.currency} onChange={this.handleCurrencyConvert} />
      </fieldset>
    )
  }
}

ReactDOM.render(<CurrencyCalculator />, document.getElementById("root"));