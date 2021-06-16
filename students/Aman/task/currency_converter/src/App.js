import React from 'react';
import CurrencyInput from './CurrencyInput';

class App extends React.Component{
constructor()
{

  super();
this.listcount=0;


}

  changeList()
{
  listcount=this.listcount+1;
  if(listcount>1)
  {
  document.getElementById('currency_selector').value="";
  
  }
  
}

  render(){
    
    return(
      <div>
        <div className="container-fluid">
        <div className="row">
              <div className="col-6 text-center">
              <h4>Choose your Currency</h4>
			<input list="standlist" placeholder="    --currency--" name="currency_selector" id="currency_selector" onclick={this.changeList()}
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
			<input list="standlist" placeholder="    --convert currency to--" name="currency_selector" id="currency_selector" onclick={this.changeList()}
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
              <CurrencyInput unit='r' />
              </div>

              <div className="col-6 text-center">
              <CurrencyInput unit='d' />
              </div>


          </div>

        
      </div>

     </div>
       
    );
  }
}

export default App;
