import React from 'react';
import ReactDOM from 'react-dom';

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
    const unit = this.props.unit;

    return(
      <fieldset>
        <legend>Enter your currency in {unitName[unit]}: </legend>
        <input value={currency} onChange={this.handleChange}></input>
        <div>
          <select value={this.props.currency} onChange={this.handleChange}>
            <option value="INR">Indian</option>
            <option value="USD">US </option>
            <option value="EUR">Euro</option>
            <option value="GBP">Pound</option>
          </select>
        </div>
        <CurrencyMessage rupees={currency} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "GBP",
      amount: 1,
      currencies: []
    };
  }
  componentDidMount() {
    axios
      .get("http://api.openrates.io/latest")
      .then(response => {
        const currencyAr = ["EUR"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }
  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(
          `http://api.openrates.io/latest?base=${
            this.state.fromCurrency
          }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };
  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };
    render(){
    const currency = this.state.currency;
    const unit = this.state.unit;
    return(
      <div>
        <CurrencyInput  currency={this.state.currency} onCurrencyChange={this.selectHandler}/>
        <CurrencyInput  currency={this.state.currency} onCurrencyChange={this.selectHandler}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />
  ,document.getElementById("root") );