import React from 'react';
import ReactDOM from 'react-dom';



let item = [
  { name: "test-1", price: 500},
  { name: "test-2", price: 1000},
  { name: "test-3", price: 750, }
];


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.addcart = this.addcart.bind(this);
    this.subtractcart = this.subtractcart.bind(this);
    
  }

  addcart() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  }

  subtractcart() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

 

  render() {
    return (
      <div>
      
            <p>{this.props.name}: {this.props.price}</p>
            <p>qty: {this.state.qty}</p>
            <button className=" btn-outline-primary" onClick={this.addcart}>+</button>
            <button className=" btn-outline-primary" onClick={this.subtractcart} disabled={this.state.qty < 1}>-</button>
    
      </div>
    );
  }
}


class Total extends React.Component {
 
  render() {
    let total = this.props.total.toFixed(2);

  
    return (
      <div>
       
          <span>total price:{total}</span>
 
      </div>
    );
  }
}




class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      item: ""
    };

    this.calculateTotal = this.calculateTotal.bind(this);

  }

  componentDidMount() {
  
      this.setState({ item: item });
   
  }

  

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }



  render() {
    if (!this.state.item) return <p></p>;

    var component = this;
    var carts = this.state.item.map(function(cart) {
      return (
        <Cart
          name={cart.name}
          price={cart.price}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
       
        {carts}
        <Total total={this.state.total} />
      </div>
    );
  }
}


ReactDOM.render(
  <Item />
  ,document.getElementById("root") );