import React from 'react';
import CurrencyMessage from './message';

class CurrencyInput extends React.Component{
    constructor(props){
      super(props);
      this.state = {currency :''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event){
      this.setState({currency : event.target.value});
    }
  
    render(){
      const currency = this.state.currency;
      const unit = this.props.unit;
      const unitName = {
        r: 'rupees',
        d: 'dollar',

      };
  
      return(
        <fieldset>
          <legend>Enter your currency in {unitName[unit]}: </legend>
          <input type="number" value={currency} onChange={this.handleChange}></input>
          <CurrencyMessage rupees={currency} />
        </fieldset>
      );
    }
  }
  export default CurrencyInput;