import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = [
  {id:101,name:"Green Backpack",price:1599,image:"https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/backpack.png"},
  {id:102,name:"Blue Backpack",price:899,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfCOY7wjFTIdKkMb9zDHVgLm0hUdhPCQ867jUaHU2YMJuJvQL2f8EESKdRGm9AWoCYOA&usqp=CAU"},
  {id:103,name:"Red Backpack",price:1299,image:"https://cdn4.iconfinder.com/data/icons/VISTA/education_icons/png/400/backpack.png"},
  {id:104,name:"Yellow Backpack",price:599,image:"https://i.imgur.com/h1HQEAB.png"},
  {id:105,name:"Black Backpack",price:499,image:"https://t4.ftcdn.net/jpg/01/53/74/97/360_F_153749740_asQhQTwZqrMj51jvdoJCNpyjWwd80QdQ.jpg"}
];

function ShoppingCart(props){
  const products = props.posts.map(
    (product) =>
    <div className="box" key={product.id}>
      <h2>{product.name}</h2>
      <img src={product.image} width="100px" alt={product.name} />
      <h3>{product.price}</h3>
      <br/><br/><button onClick={onAdd}>Add to Cart</button>
    </div>
  );

  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
    }
    else{
      setCartItems([...cartItems, {...product, qty:1}]);
    }
  }
  
  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
    else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x))
    }
  }
  
  return(
    <div>
      <h1> Backpack </h1>
      {products}
      <br/><h1>Checkout</h1>
      {cartItems.length === 0 && <div>Cart is empty.</div>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <button onClick={() => onRemove(item)}>-</button>
            <input type="text" name="quantity" value={item.qty} />
          <button onClick={() => onAdd(item)}>+</button>
          <p>{item.qty} x {item.price}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <ShoppingCart posts = {data} />
  ,document.getElementById("root") );