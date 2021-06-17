import React from 'react';
import ReactDOM from 'react-dom';

function CurrencyMessage(props){
  if(props.rupees >= 1000){
    return <p>This is too much money.</p>
  }
  return <p>No this is not too much money.</p>
}

function toRupees(money,unitvalue){
  if(unitvalue === "d"){
    money = money*75
  }else if(unitvalue === "e"){
    money = money*89
  }else{

  }
  return money;
}

function toDollar(money,unitvalue){
  if(unitvalue === "d"){
    money = money/75
  }else if(unitvalue === "e"){
    money = money*1.21
  }else{

  }
  return (money);
}

function toEuro(money,unitvalue){
  if(unitvalue === "r"){
    money = money/88
  }else if(unitvalue === "d"){
    money = money*0.83
  }else{

  }
  return (money);
}


class CurrencyFields extends React.Component{
  constructor(props){
    super(props);
    this.state = {currency:'',unit:''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onCurrencyChange(event.target);
  }

  render(){
    const currency = this.props.currency;
    const unit = this.props.unit;
    return(
      <div>
        <fieldset>
          <legend>Enter your currency in: </legend>
          <input name="currency" value={currency} onChange={this.handleChange}></input>
          <select name="unit" value={unit} onChange={this.handleChange} >
            <option value="r">Rupees</option>
            <option value="d">Dollar</option>
            <option value="e">Euro</option>
            <option value="y">Yen</option>
          </select>
          <CurrencyMessage rupees={currency}/>
        </fieldset>
        
      </div>
    );
  }
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      field1:{
        currency:'',
        unit:'r',
      },
      field2:{
        currency:'',
        unit:'r',
      }
    };
    this.handleChangeone = this.handleChangeone.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    this.convertclac = this.convertclac.bind(this);
  }

  handleChangeone(target){
    const name = target.name;
    const value = target.value;
     
    const field1 = Object.assign({}, this.state.field1)
    field1[name] = value
    this.setState({field1})
    if(this.state.field2.currency !== ''){
      const convertedcur = this.convertclac(this.state.field2.currency,this.state.field2.unit,field1.unit)
      field1.currency = convertedcur;
      this.setState({field1})
    }
  
    
    console.log("currency1 :"+field1.currency +"unit1 :"+field1.unit)
    console.log("currency2 :"+this.state.field2.currency +"unit2 :"+this.state.field2.unit)
  }

  handleChangeTwo(target){
    const name = target.name;
    const value = target.value;
     
    const field2 = Object.assign({}, this.state.field2)
    field2[name] = value
    this.setState({field2})
    console.log("currency1 :"+this.state.field1.currency +"unit1 :"+this.state.field1.unit)
    console.log("currency2 :"+field2.currency +"unit2 :"+field2.unit)
   
    if(this.state.field1.currency !== ''){
      const convertedcur = this.convertclac(this.state.field1.currency,this.state.field1.unit,field2.unit)
      field2.currency = convertedcur
      this.setState({field2})
      console.log("this.state.field1.currency",this.state.field1.currency)
      console.log("convertedcur",convertedcur)
    }
   
    console.log("currency2 :"+field2.currency +"unit2 :"+field2.unit)
    console.log("currency1 :"+this.state.field1.currency +"unit1 :"+this.state.field1.unit)
  }

  convertclac(money,from,to){
    console.log("money"+money+"from"+from+"to"+to);

    if(from === 'r'){
      if(to === 'd'){
        money = money/75;
      }else if(to === 'e'){
        money = money/89
      }else{
        money = money*1.5
      }
    }else if(from === "d"){
      if(to === 'r'){
        money = money*75;
      }else if(to === 'e'){
        money = money*0.83;
      }else{
        money = money*110;
      }
    }else if(from === "e"){
      if(to === 'r'){
        money = money*87;
      }else if(to === 'd'){
        money = money*1.20;
      }else {
        money = money*137.24;
      }
    }else if(from === "y"){
      if(to === 'r'){
        money = money*0.06;
      }else if(to === 'd'){
        money = money/110;
      }else{
        money = money*0.0075;
      }
    }
    return money  
  }
  
  render(){
      const currencyone = this.state.field1.currency;
      const currencytwo = this.state.field2.currency;
      console.log("currencyone"+currencyone+"currencytwo"+currencytwo)
    return(
      <div>
        <CurrencyFields currency={currencyone} onCurrencyChange={this.handleChangeone}/>
        <CurrencyFields currency={currencytwo} onCurrencyChange={this.handleChangeTwo}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />
  ,document.getElementById("root") );