import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Currency-checking

//function CurrencyMessage(props){
 //return <h2><b>Currency calculator</b></h2>
//}


const unitname={
  r:"rupee",
  d:"dollar"

};

function toRupee(dollar){
   return(dollar*75);
}

function toDollar(rupees){
  return(rupees/75);
}
 
class CurrencyInput extends React.Component{
  constructor(props){
    super(props);
    //this.state={currency:' '}
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    //this.setState=({currency: event.target.value});
    this.props.onCurrencyChange(event.target.value);
  }

  render(){
     const currency=this.props.currency;
     const unit=this.props.unit;

      return(
        <div>
         <p>Enter your Currency in :</p>
          <select>
            <option value='USA'>Dollar</option>
            <option value='INDIA'>Rupee</option>
            <option value='France'>Euro</option>
            <option value='Egypt'>Pound</option>
          </select>   
        
          <input value={currency.value} onChange={this.handleChange}></input>
     
          </div>
     
      );
  } 
}

class Calcualator extends React.Component{
  constructor(props){
    super(props);
    this.state={currency:'', unit:'r'};
    this.handleDollarChange=this.handleDollarChange.bind(this);
    this.handleRupeeChange=this.handleRupeeChange.bind(this);
   
  }
    handleRupeeChange(currency){
       this.setState=({'unit' : 'r', currency})
    }
    handleDollarChange(currency){
      this.setState=({'unit' : 'd', currency})
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
  
ReactDOM.render(
<Calcualator/> ,document.getElementById("root"));