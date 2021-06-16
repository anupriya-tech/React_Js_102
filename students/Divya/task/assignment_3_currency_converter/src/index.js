import React from 'react';
import ReactDOM from 'react-dom';


function toRupees(dollar) {
  return (dollar * 75);
}

function toDollar(rupees) {
  return (rupees / 75);
}

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', value: 'rupeese' };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ value: event.target.value });

    this.props.onCurrencyChange(event.target.value);
    console.log("heloo" + event.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Enter your currency in : </legend>

        <input name='name' placeholder='currency' value={this.state.name} onChange={this.handleChange} />
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="rupeese">Rupeese</option>
            <option value="dollar">Dollar</option>
            <option value="euro">Euro</option>
            <option value="ether">Ether</option>
          </select>
        </label>

      </fieldset>
    )
  }
}
  // handleSubmit(event){
  //   const {name, value} = this.state;
  //   event.preventDefault();
  //   alert(`....The submitted details are....\n
  //     Name : ${name}
  //     Password : ${value}
  //   `);
  //   console.log(this.state.value);
  // }
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currency: '', unit: 'r' };
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.handleRupeeChange = this.handleRupeeChange.bind(this);
  }

  handleRupeeChange(currency) {
    this.setState({ 'unit': 'r', currency })
  }
   
  handleDollarChange(currency) {
    this.setState({ 'unit': 'd', currency })
  }

  render() {
    const currency = this.state.currency;
    console.log("currency is " + currency);
    const unit = this.state.unit;
    console.log("unit is " + unit);
    
    const rupees = currency === 'rupeese' ? toRupees(currency): currency;

    return (
      <div>
        <CurrencyInput unit='r' currency={this.state.currency} onCurrencyChange={this.handleRupeeChange} />
        <CurrencyInput unit='d' currency={this.state.currency} onCurrencyChange={this.handleDollarChange} />
      </div>
    );
  }
}
ReactDOM.render(<Calculator />, document.getElementById("root"));
 