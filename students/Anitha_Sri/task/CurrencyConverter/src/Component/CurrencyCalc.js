import React from 'reactjs'
import ReactDOM from 'react-dom'
//

class CurrencyCalc extends React.Component{

constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.handleCurrencyChange=this.handleCurrencyChange(this)
}
handleChange(event){
this.props.onCountryChange({money:this.props.money,currency:event.target.value})
}

handleCurrencyChange(event){
this.props.onCountryChange({amount:event.target.value,currency:this.props.money})
}

render(){
    return(


<div>
    <div>
        <input type="number" value={this.props.money} onChange={this.handleChange}></input>
    </div>

    <div>
        <select>
            <option value="INR">Indian Rupee</option>
            <option Value="USD">US Dolar</option>
            <option value="Dhiram">United Arab Emirates</option>
            <option value ="dollar">Australia</option>
        </select>
    </div>
</div>


    )
}


}

class CurrencyConverter extends React.Component{

constructor(props){
    super(props)
    this.state={
        moneyFrom:{
            money:1,
            currencyNote:'INR'
        },
        moneyTo:{
            money:this.currencyconverter('USD','INR',1),
        }


    }

    this.handleCurrencyChangeOne=this.handleCurrencyChangeOne.bind(this)
    this.handleCurrencyChangeTwo=this.handleCurrencyChangeTwo.bind(this)
    this.CurrencyConverter=this.CurrencyConverter.bind(this)
}

render(){

    return(
      <div>
        <h1>Currency Converter</h1>
        <CurrencyCalc amount={this.state.moneyFrom.amount} currency={this.state.moneyFrom.currency} onCountryChange={this.handleCurrencyChangeOne} />
        <CurrencyCalc amount={this.state.moneyTo.amount} currency={this.state.moneyTo.currency} onCountryChange={this.handleCurrencyChangeTwo} />
      </div>
    )
  }
    
}
ReactDOM.render(<CurrencyCalc/>,document.getElementById('roots'))
export default CurrencyCalc