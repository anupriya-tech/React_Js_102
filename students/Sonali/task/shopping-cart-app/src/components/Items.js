import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
        <button type="button" class="btn btn-primary" onClick={() => decrement(id)}>-</button>
      
          <input type="text" placeholder={quantity} disabled />
          <button type="button" class="btn btn-primary"  onClick={() => increment(id)}>+</button>
        
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
        <button type="button" class="btn btn-primary" onClick={() => removeItem(id)}>X</button>
        
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
