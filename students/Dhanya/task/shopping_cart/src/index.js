import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShopCart extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      products: [
        {id:'p01',
        name:'Formal_Shirt1',
        price:500,
        qty:50},
        {id:'p02',
        name:'Formal_Shirt2',
        price:300,
        qty:30},
        {id:'p03',
        name:'Formal_Shirt3',
        price:700,
        qty:25}            
      ],
      qty:0
    }
  }

  addItem(){
    //alert("add item clicked");
    this.setState(
      {qty: this.state.qty + 1}
    );
  }

  delItem(){
    //alert("delete item clicked");
    this.setState(
      {qty: this.state.qty - 1}
    );    
  }

  render(){
    return (
      <div>
        <table>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th colSpan="2">Options</th>
            </tr>
        </thead>
        <tbody>          
            {
              this.state.products.map(function(item) {
                return (<tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td><button onClick={this.addItem}>Add</button></td>
              <td><button onClick={this.delItem}>Delete</button></td>
            </tr>
                );
              })
            }   
        </tbody>
        </table>
        <table>
            <tr><td>{this.state.qty}</td></tr>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
    <ShopCart />,
  document.getElementById('root')
);