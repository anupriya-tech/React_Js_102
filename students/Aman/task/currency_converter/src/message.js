import React from 'react';

function CurrencyMessage(props){
    if(props.rupees >= 1000){
      return <p>This is too much money.</p>
    }
    return <p>No this is not too much money.</p>
  }

  export default CurrencyMessage;
  