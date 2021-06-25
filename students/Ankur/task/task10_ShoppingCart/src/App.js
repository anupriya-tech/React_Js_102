import './App.css';
import reactDom from 'react-dom';
import React, { useState } from 'react';
import Prod from './component.js'

class Shop extends React.Component{

constructor(props){
    super(props);
    this.state = {
      cartQuantity: 0,
      prod: {
        // Prod_id: { prod_Name, prod_imgSrc, prod_excerpt, prod_price, inCart }
        "pr_101": {Name: "Product 1", imgSrc: "prodImg.jpeg", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed libero quis arcu laoreet tempor.", price: "$ 150", cartQuantity: 0},
        "pr_102": {Name: "Product 2", imgSrc: "prodImg.jpeg", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed libero quis arcu laoreet tempor.", price: "$ 100", cartQuantity: 0},
        "pr_103": {Name: "Product 3", imgSrc: "prodImg.jpeg", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed libero quis arcu laoreet tempor.", price: "$ 200", cartQuantity: 0},
        "pr_104": {Name: "Product 4", imgSrc: "prodImg.jpeg", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed libero quis arcu laoreet tempor.", price: "$ 125", cartQuantity: 0}
    }
    }
    
    this.handleQuantityChange = this.handleQuantityChange.bind(this);

  }

  handleQuantityChange(data){
    let {id, quantity} = data;
    
    this.setState( { 
      prod: { ...this.state.prod, 
        [id]: {...this.state.prod[id], 
          cartQuantity: quantity}
        } 
    }
    );

  }
  

  render(){
    // console.log("this: ", this.state.prod)
    const prodList = []
    const cartList = []
    for(let prodId in this.state.prod){
      let prod = this.state.prod[prodId];
      prodList.push(<Prod prodID={prodId} prodImgSrc={prod.imgSrc} prodName={prod.Name} prodExcerpt={prod.excerpt} prodPrice={prod.price} cartQuantity={prod.cartQuantity} onQuantityChange={this.handleQuantityChange} />)
      if(prod.cartQuantity > 0){
        cartList.push(<Prod prodID={prodId} prodImgSrc={prod.imgSrc} prodName={prod.Name} prodExcerpt={prod.excerpt} prodPrice={prod.price} cartQuantity={prod.cartQuantity} onQuantityChange={this.handleQuantityChange} />)
      }
    }
    return(
      <div className="shop">
        <div className="prod_wrapper">
          <h1>Products List</h1>
          {prodList}
        </div>
        <div className='cart_wrapper'>
          <h1>Cart</h1>
          {cartList.length > 0 ? cartList : <p className="emptyCartMsg">Cart is Empty add products to cart</p>}
        </div>
      </div>
      
    )
  }
}


export default Shop;