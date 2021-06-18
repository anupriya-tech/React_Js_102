import ReactDOM from 'react-dom';
import React, { useState } from 'react';

//Returns a stateful value, and a function to update it.

function CurrencyConvertor(){
	const[data,setData]  = useState({cur : '' , amt : ''});
	const handleUpdateCalculation = (event) => {
    const {name,value} = event.target;
    const datCur = data.cur;
    const dataAmt = data.amt;
    setData({ ...data, [name]:value});

    calC(datCur,dataAmt); 
  }
 
  const calC = (datCur,dataAmt) =>
  {
    alert(datCur +"="+ dataAmt);
    if(datCur === 'USD') 
    { return document.getElementById("setConvert").innerHTML = dataAmt * 74; }

    if(datCur === 'EUR') 
    { return document.getElementById("setConvert").innerHTML = dataAmt * 89; }

    if(datCur === 'GBP') 
    { return document.getElementById("setConvert").innerHTML =  dataAmt * 103; }

    if(datCur === 'AUD') 
    { return document.getElementById("setConvert").innerHTML =  dataAmt * 57; }

    if(datCur === 'INR') 
    { return document.getElementById("setConvert").innerHTML =  dataAmt * 1; }

  }


  return(
  
    <form>
        <fieldset>
          <legend>Select Currency To INR</legend>
		        <select name="cur" value={data.cur} onChange={handleUpdateCalculation} >
            <option value='INR'>INDIA</option>
            <option value='USA'>USA</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='AUD'>AUD</option>
          </select>
          <input type="text" name="amt" value={data.amt} onChange={handleUpdateCalculation} /> <br/>
          To INR : <div id="setConvert"></div>
        </fieldset>
      </form>
  );
}

ReactDOM.render(
  <CurrencyConvertor />
  ,document.getElementById("root") );