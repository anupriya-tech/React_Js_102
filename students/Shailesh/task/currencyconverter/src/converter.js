import React from "react";
import './index.css'

class Converter extends React.Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
    date: ""
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        date: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount);
          this.setState({
            result,
            date
          });
        });
    }
  };

  
  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="main-box">
            <div className="box-content">
             <h5>Currency Converter</h5>
              <div className="row">
                <div className="form-box">
                  <form className="form-inline">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form-control"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form-control"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline">
                    <input
                      disabled={true}
                      value={result}
                      className="form-control"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
