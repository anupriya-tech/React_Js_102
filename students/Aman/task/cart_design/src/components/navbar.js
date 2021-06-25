import React, { useContext } from "react";

const Navbar = () => {

  return (
    <>
      <header>
        <div className="continue-shopping">
        <h1>Welcome to Aggarwal Bhojanalya</h1>
                    <br/>
                    <br/>
                    <hr/>
        </div>

        <div className="cart-icon">
        <p>7</p>

          <img src="Images/cart.png" alt="cart-logo" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
