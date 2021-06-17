import React from "react";
import ReactDOM from "react-dom";

class CurrencyRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleCurrencyChange(e) {
    this.props.onRowOptionChange({
      amount: this.props.amount,
      currency: e.target.value,
    });
  }

  handleAmountChange(e) {
    this.props.onRowOptionChange({
      amount: e.target.value,
      currency: this.props.currency,
    });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.props.amount}
          onChange={this.handleAmountChange}
        />
        <select
          value={this.props.currency}
          onChange={this.handleCurrencyChange}
        >
          <option value="INR">Indian Rupee</option>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">Pound</option>
        </select>
      </div>
    );
  }
}

class CurrencyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsFrom: {
        amount: 1,
        currency: "INR",
      },
      optionsTo: {
        amount: this.currencyConverter("USD", "INR", 1),
        currency: "USD",
      },
    };

    this.handleCurrencyRowChangeOne =
      this.handleCurrencyRowChangeOne.bind(this);
    this.handleCurrencyRowChangeTwo =
      this.handleCurrencyRowChangeTwo.bind(this);
    this.currencyConverter = this.currencyConverter.bind(this);
  }

  handleCurrencyRowChangeOne(currencyRowObj) {
    let convertedAmt = this.currencyConverter(
      currencyRowObj.currency,
      this.state.optionsTo.currency,
      currencyRowObj.amount
    );

    this.setState({
      optionsFrom: {
        amount: currencyRowObj.amount,
        currency: currencyRowObj.currency,
      },
      optionsTo: {
        amount: convertedAmt,
        currency: this.state.optionsTo.currency,
      },
    });
  }

  handleCurrencyRowChangeTwo(currencyRowObj) {
    let convertedAmt = this.currencyConverter(
      currencyRowObj.currency,
      this.state.optionsFrom.currency,
      currencyRowObj.amount
    );

    this.setState({
      optionsFrom: {
        amount: convertedAmt,
        currency: this.state.optionsFrom.currency,
      },
      optionsTo: {
        amount: currencyRowObj.amount,
        currency: currencyRowObj.currency,
      },
    });
  }

  currencyConverter(currencyFrom, currencyTo, amountFrom) {
    const ExchangeRates = {
      EUR: { INR: 88.95, GBP: 0.86, USD: 1.21, EUR: 1 },
      USD: { INR: 73.36, GBP: 0.71, USD: 1, EUR: 0.82 },
      INR: { INR: 1, GBP: 0.0097, USD: 0.014, EUR: 0.011 },
      GBP: { INR: 103.31, GBP: 1, USD: 1.41, EUR: 1.16 },
    };
    return ExchangeRates[currencyFrom][currencyTo] * amountFrom;
  }

  render() {
    return (
      <div className="AppContainer">
        <h1>Currency Converter</h1>
        <CurrencyRow
          amount={this.state.optionsFrom.amount}
          currency={this.state.optionsFrom.currency}
          onRowOptionChange={this.handleCurrencyRowChangeOne}
        />
        <CurrencyRow
          amount={this.state.optionsTo.amount}
          currency={this.state.optionsTo.currency}
          onRowOptionChange={this.handleCurrencyRowChangeTwo}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <CurrencyCalculator />
  </React.StrictMode>,
  document.getElementById("root")
);
