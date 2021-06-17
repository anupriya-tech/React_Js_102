import React from 'react';
import ReactDOM from 'react-dom';

class CountryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {cur:'', amt:'1'};
    this.handleAmtChange = this.handleAmtChange.bind(this);
    }


  handleAmtChange(event){
    // this.setState({cur: event.target.value, amt: event.target.value});
    // const getCurrncy = event.target.value;
    // const getAmt = event.target.value;
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const getCurrncy =0;
    const getAmt = 0;

    console.log(name+" = "+value);
    this.setState({[name]:value});

    //console.log(getCurrncy +" = " + getAmt);
    switch(getCurrncy) {
      case 'USD':
        return document.getElementById("setConvert").innerHTML = getAmt * 74;
      case 'EUR':
        return document.getElementById("setConvert").innerHTML = getAmt*89;
      case 'GBP':
        return document.getElementById("setConvert").innerHTML =  getAmt*103;
      case 'AUD':
        return document.getElementById("setConvert").innerHTML =  getAmt*57;
      default:
        return document.getElementById("setConvert").innerHTML =  getAmt*1;
    }
    
  }


  render(){
    return(
      <form>
        <fieldset>
          <legend>Select Currency To INR</legend>
          <select name="cur" value={this.state.cur} onChange={this.handleAmtChange}>
            <option value='INDIA'>INDIA</option>
            <option value='USA'>USA</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='AUD'>AUD</option>
          </select>
          <input  name="amt" value={this.state.amt} onChange={this.handleAmtChange} /> <br/>
          To INR : <div id="setConvert"></div>
          {/* <div>
            {getCurrency} : <input value =" " placeholder="Enter {getCurrency} to convert in INR" onChange={this.handleChange} /> 
            {getCurrency} To INR : <div id="setConvert"></div>
          </div> */}
        </fieldset>
      </form>
    );
  }

}

ReactDOM.render(
  <CountryForm />
  ,document.getElementById("root") );