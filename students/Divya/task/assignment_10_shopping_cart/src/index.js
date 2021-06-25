import React from 'react';
import ReactDOM from 'react-dom';

let productList = [
  { name: "Rose", price: 231, src:'https://homegardenandhomestead.com/wp-content/uploads/2019/08/red-rose-bush.jpeg'},
  { name: "Jasmin", price: 784, src:'https://5.imimg.com/data5/YB/DC/MY-32199146/jasmine-flower-plant-500x500.jpg'},
  { name: "Dalia", price: 156, src:'https://www.almanac.com/sites/default/files/image_nodes/rose-peach.jpg'}, 
  { name: "Lilly", price: 300, src:'https://cdn.shopify.com/s/files/1/1034/3311/files/Pink-lilies-90636691_3014x2002_9f57690d-3bfd-4858-8370-96a93a8838a9_1024x1024.jpeg?v=1534478089'},
  { name: "Sunflower", price: 500, src:'https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/sunflower-1627193_1920.jpg?itok=z0U222mG'}
];
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState({
      quantity: this.state.quantity + 1
    });
    alert("One more " + this.props.name + " added");
    this.props.handleTotal(this.props.price);
  }

  subtract() {
    this.setState({
      quantity: this.state.quantity - 1
    });
    alert("One more " + this.props.name + " removed");
    this.props.handleTotal(-this.props.price);
  }

  render() {
    return (
      <div>
        <div>
            <h3>{this.props.name}: Rs {this.props.price}</h3>
            <img style={{ maxWidth: '250px' }} src={this.props.src} alt=" "/>
            Quantity:  {this.state.quantity} 
            <button onClick={this.add}>
              +1
            </button>
            <button onClick={this.subtract} disabled={this.state.quantity < 1}>
              -1
            </button>
        </div>
      </div>     
    );
  }
}

class Total extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
  
  handleSubmit(props){
   console.log("submitted:  "+ this.props.total);
   alert(`....PROCEED TO BUY....\n
      Total Price : ${this.props.total}
    `);
  }
  render() {
    let total = this.props.total;
    return (
      <div>
        <hr></hr>
        <h2>
          CHECK OUT NOW !
        </h2>
        <h3>
          Total price (Rs) : {total}
        </h3>
        <button onClick={this.handleSubmit}>BUY NOW </button>
      </div>
    );
  }  
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }
  totalPrice(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }

  render() {
    if (!this.state.productList) return <div></div>;
    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          handleTotal={component.totalPrice}
        />
      );
    });

    return (
      <div>
        <h2>CART PAGE</h2>
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("root"));