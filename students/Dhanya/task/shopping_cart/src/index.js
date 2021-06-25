import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShopCart extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      products:[
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
      qty:0,
      total:0
    }
    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
  }

  addItem(price){
    this.setState({ 
      qty: this.state.qty + 1,
      total: this.state.total + price
    });
  }

  delItem(){
    this.setState({ 
      qty: this.state.qty - 1 
    })
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
              this.state.products.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td><button onClick={this.addItem}>Add</button></td>
                  <td><button onClick={this.delItem}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Quantity: {this.state.qty}</td>
              <td>Total Price: {this.state.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
    <ShopCart />,
  document.getElementById('root')
);