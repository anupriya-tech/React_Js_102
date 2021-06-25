import React from "react";

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cartQuantity: this.props.cartQuantity
        };

        this.handleQuantityChange =  this.handleQuantityChange.bind(this); 
    }

    handleQuantityChange(e){

        if(e.target.name === "decreaseQuantity"){

            this.setState( {cartQuantity: this.state.cartQuantity - 1}, () => {
                if (this.props.onQuantityChange) {
                  this.props.onQuantityChange({id: this.props.prodID, quantity: this.state.cartQuantity});
                } 
            }
            );

        } else{

            this.setState( {cartQuantity: this.state.cartQuantity + 1}, () => {
                if (this.props.onQuantityChange) {
                  this.props.onQuantityChange({id: this.props.prodID, quantity: this.state.cartQuantity});
                } 
            }
            );
        
        }

    }
    render(){
        let qChange = (
            <div className="changeQuantity">
                <input type="button" name="decreaseQuantity" value={this.state.cartQuantity < 2 ? "Del" : "-"} onClick={this.handleQuantityChange} />
                <input type="text" name="currentQuantity" value={this.state.cartQuantity} style={{width: '25px', textAlign: "center"}} readonly="true" />
                <input type="button" name="increaseQuantity" value="+" onClick={this.handleQuantityChange} />
            </div>
        );
        return (
            <div className="prod_container">
                <div className="prodImage">
                    <img src={this.props.prodImgSrc} />
                </div>
                <div className="prodDetail">
                    <h3>{this.props.prodName}</h3>
                    <p className="prodExcerpt">
                        {this.props.prodExcerpt}
                    </p>
                    <p className="prodPrice">{this.props.prodPrice}</p>
                    <div className="btn-container">
                        {this.state.cartQuantity <= 0 ? <input type="button" value="Add to Cart" onClick={this.handleQuantityChange} /> : qChange}
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Product; 