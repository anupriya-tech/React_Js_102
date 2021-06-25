import React from "react";
import './cart.css';


const Modal=({props})=>{
const add=()=>
{
  console.log(props.id+props.title);
}


  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={props.itempic} alt="loading photo of dish" />
        </div>

        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>

        <div className="price">
          <h3>{props.price}₹</h3>
        </div>

        <div>
          <button onClick={add} style={{marginLeft:"40px",fontSize:"18px",padding:"5px"}}>Add to cart</button>
          </div>

      </div>

      <hr />
      </div>
  );
}

export default Modal;
