import React from 'react'

//
const unitname={
    r:"rupee",
    d:"dollar"
}
function toRupee(dollar){

    return (dollar*75)
}

function toDollar(rupees){
    return (rupees/75)
}

class CurrencyInput extends React.Component{

constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
}

handleChange(event){
this.props.isCurrencyChange(event.target.value)
}

render(){
 const currency=this.props.currency
 const unit=this.props.unit   
return(
<div>
<select>
    <option value="USA">Dollar</option>
    <option value="India">Rupee</option>
    <option value="UAE">Dhiram</option>
    <option value="Egypt">Pound</option>
</select>
<input value={currency.value} onChange={this.handleChange}></input>
</div>
)
}
}

class Calculator extends React.Component{
constructor(props){
super(props)

this.state={currency:"",unit:'r'}
this.handleDolarChange=this.handleDolarChange.bind(this)
this.handleRupeeChange=this.handleRupeeChange.bind(this)
}

handleDolarChange(currency){
    this.setState=({'unit' : 'd', currency})
}

//

handleRupeeChange(currency){
this.setState=({'unit':'r',currency})
}
render(){
    const currency=this.state.currency;
    const unit=this.state.unit;
    const rupees = unit === 'd' ? toRupee(currency): currency;
    const dollar = unit === 'r' ? toDollar(currency) :currency;
    
  
   return(
 
    
      <div>
        <h3>Currency Converter</h3>
        <CurrencyInput unit='r' currency={rupees} onCurrencyChange={this.handleRupeeChange}/>
         <CurrencyInput unit='d' currency={dollar} onCurrencyChange={this.handleDollarChange}/> 
      </div>
    );
  }
}

export default Calculator