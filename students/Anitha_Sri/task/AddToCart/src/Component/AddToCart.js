import React from 'react'




class AddToCart extends React.Component{
constructor(props){
super(props)
this.state={
    products:[{
        Sno:101,
        image:"https://i.pinimg.com/originals/bc/aa/d0/bcaad00d4bf16fd94bc45665ddad18e9.jpg",
        brandName:"Canon MirrorLess",
        qty:1,
        price:120000
        },

        
        {
            Sno:102,
            image:"https://cdn.mos.cms.futurecdn.net/CE3xB72VY678mUaEbBSeBQ.jpg",
            brandName:"Nikon",
            qty:1,
            price:180000
            },

            {
                Sno:103,
                image:"https://images-na.ssl-images-amazon.com/images/I/81K5z3F-vQL._SL1500_.jpg",
                brandName:"Fuji",
                qty:1,
                price:150000
                },


                {
                    Sno:104,
                    image:"https://static.bhphoto.com/images/images500x500/kodak_az652bk_pixpro_az652_astro_zoom_1519060027_1391175.jpg",
                    brandName:"Kodak",
                    qty:1,
                    price:50000
                    },


                    {
                        Sno:105,
                        image:"https://static.toiimg.com/photo/54054540/Sony-CyberShot-DSC-W830-Point-Shoot-Camera.jpg",
                        brandName:"Sony",
                        qty:1,
                        price:140000
                        },
    ]
}
}

increaseQty=()=>{
 
    this.setState({
        products:{
            ...this.state.products,
        qty:this.state.products[0].qty+1
        }
    })
    
}

decreaseQty=()=>{
    this.setState({
        products:{

        ...this.state.products,
        qty:(this.state.products.qty>0)?this.state.products.qty-1:1
        }
    })
}

deleteProduct=()=>{
   this.setState({
           products:{
               ...this.state.products,
           qty:(this.state.products.qty!==null)?alert('Product Successfully removed'):"Failed"
          
           }
       
   })
}

render(){
return(
<React.Fragment>


<div className="container">
    
    <div className="row">
        .
        <div className="col-md-12">
        <table className="table table-hover table-striped">
    <thead className="bg-success text-white">
        <tr>
            <th key={this.state.products.Sno}>S.No</th>
            <th>Cameras</th>
            <th>Brand Name</th>
            <th>Product Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Cart</th>
</tr>
    </thead>
    <tbody>
       {
         
         this.state.products.map((product)=>{
         
            return(

<tr>
            <td>{product.Sno}</td>
             <td>
                 <img src={product.image} width="100px" height="100px" className="img-thumbnail" alt=""/>
             </td>
             <td>{product.brandName}</td>
             <td>{product.price}</td>
             <td>
                 <i className="fa fa-plus-circle mx-1" onClick={this.increaseQty.bind(this)}/>
                 {product.qty}
                 <i className="fa fa-minus-circle mx-1" onClick={this.decreaseQty.bind(this)}/>
                 </td>
             <td>{product.price*product.qty}</td>
             <td>
                 
                 <button className="btn btn-success btn-sm" onClick={this.deleteProduct.bind(this)}>Remove</button>
             </td>
         </tr>







            )


         })





       }
           

                
                    




                
</tbody>
</table>     
        </div>
        
    </div>
    
</div>



</React.Fragment>


)
}
}

export default AddToCart