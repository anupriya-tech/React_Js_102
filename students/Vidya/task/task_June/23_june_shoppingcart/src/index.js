import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const itemList = ["Item 1","Item 2","Item 3","Item 4","Item 5"];
var cartList = [];

class MyCart extends React.Component{
  constructor(props)
  {
    super(props);
    this.handleItem = this.handleItem.bind(this);
  }

  handleItem()
  {
    var i;
    for(i of itemList)
    {
      document.write(i);
    }
  }

  handleCart(props){
    alert(this.props);
  } 
  
  render() {
    return ( <div>
      <div>
        <li key="item1">Item 1</li>
        <li key="250">Price : INR 250.00</li>
        <button onClick="{this.handleCart(250)}"> ADD </button>
      </div>

      <div>
        <li key="item2">Item 2</li>
        <li key="250">Price : INR 250.00</li>
        <button onClick="{this.handleCart(250)}"> ADD </button>
      </div>
      <div>
        <li key="item3">Item 3</li>
        <li key="250">Price : INR 250.00</li>
        <button onClick="{this.handleCart(250)}"> ADD </button>
      </div>
      <div>
        <li key="item4">Item 4</li>
        <li key="250">Price : INR 250.00</li>
        <button onClick="{this.handleCart(250)}"> ADD </button>
      </div>
           
      
    </div> );
  }
   
}


ReactDOM.render(
  <MyCart />,
  document.getElementById('root')
);

