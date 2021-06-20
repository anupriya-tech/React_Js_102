import React from 'react';
import CurrencyInput from './CurrencyInput';


function dollarToRupees(val) {
  return (val*75);
}

function dollarToEuro(val) {
  return (val*0.83);
}
function dollarToDhiram(val) {
  return (val*3.67);
}






export default class App extends React.Component{
constructor()
{
super();
this.state={default:"",converted:"",defValue:0,conValue:0}
this.check = this.check.bind(this);
this.checkConverted = this.checkConverted.bind(this);
}

check()
{
var def=document.getElementById('currency_selector').value;
this.setState({default:def});



}
checkConverted()
{
  var con=document.getElementById('convert_currency').value;
  alert(con);
  this.setState({converted:con});
  this.f1();
  }



  f2=(data)=>
  {
    this.setState({defValue:data});
   console.log(data);
  }

f1=()=>
{
  console.log("f1 executed");
if(this.state.default=="United States Dollar") 
{
      if(this.state.converted=="Indian Rupees")
      {
       this.state.conValue= dollarToRupees(this.state.defValue);
       console.log(this.state.conValue);
      }

      else if(this.state.converted=="Euro")
      {
       this.state.conValue= dollarToEuro(this.state.defValue);
       console.log(this.state.conValue);
      }
      else if(this.state.converted=="Dhiram")
      {
       this.state.conValue= dollarToDhiram(this.state.defValue);
       console.log(this.state.conValue);
      }
      else if(this.state.converted=="United States Dollar")
      {
       this.state.conValue= this.state.defValue;
       console.log(this.state.conValue);
      }
    
}
else if(this.state.default=="Indian Rupees")
{}
else if(this.state.default=="Euro")
{}
else if(this.state.default=="Dhiram")
{}

}


f3=(data)=>
{}

f2=(data)=>
{
this.setState({defValue:data});
console.log(data);
}
  

  render(){
    
    return(
      <div>
        <div className="container-fluid">
        <div className="row">
              <div className="col-6 text-center">
              <h4>Choose your Currency</h4>
			<input list="standlist" placeholder="    --currency--" name="currency_selector" id="currency_selector" onChange={this.check}
		 required/>
		 
			
                  <datalist id="standlist">	
                  <option value="Indian Rupees"/>
                  <option value="United States Dollar"/>
                  <option value="Euro"/>
                  <option value="Dhiram"/>
                  </datalist>	

               </div>


              <div className="col-6 text-center">
              <h4>Convert Currency</h4>
			<input list="standlist"  placeholder="    --convert currency to--" name="convert_currency" id="convert_currency" onChange={this.checkConverted}
		required/>
		 
			
                  <datalist id="standlist">	
                  <option value="Indian Rupees"/>
                  <option value="United States Dollar"/>
                  <option value="Euro"/>
                  <option value="Dhiram"/>
                  </datalist>	




              </div>


          </div>
          
          
          
          
          <div className="row">
              <div className="col-6 text-center">
              <CurrencyInput myDataGet={this.f2} unit={this.state.default}/>
              </div>

              <div className="col-6 text-center">
              <CurrencyInput value={this.state.conValue} myDataGet={this.f3} unit={this.state.converted}/>
              </div>


          </div>

        
      </div>

     </div>
       
    );
  }
}

