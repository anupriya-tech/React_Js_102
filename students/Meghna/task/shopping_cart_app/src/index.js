import React from 'react';
import ReactDom from 'react-dom';
import { isCompositeComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';

const items = [
  {id:1,name:"item1",price:100},
  {id:2,name:"item2",price:200},
  {id:3,name:"item3",price:300},
  {id:4,name:"item4",price:400}
]

var addedcartitems = []
// var cartid = []

class CartComponent extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        cartLiitemList:[],
        finalprice:0,
        qun:1,
        cartjsonlis:[]
    }
    this.onChange = this.onChange.bind(this);
    this.BuyItems = this.BuyItems.bind(this);
  }

  onChange(event,price) {
    this.setState({qun: event.target.value},() => {
      console.log("this.state.qun",this.state.qun)
    })
    // price = price*event.target.value;
    // this.setState({finalprice:price})
  }

  BuyItems(){
    console.log("buy items",this.state.cartjsonlis)
    // alert("buy items")
  }

  componentWillReciveprops(nextProps){
    console.log("in component will recive props")
  }
  
  componentWillUpdate(nextprops){
    console.log("hello from component will update.",this.props.cartIdList)
    console.log("hello from component will update.",this.props.cartitemid)
    
  }

  componentDidUpdate(){
    console.log("hello from component Did update.",this.props.cartIdList)
    
  }


  render(){
    console.log("in cart render")

    var lis = this.props.cartIdList;
    let id = this.props.cartitemid;
    
    if(lis.indexOf(id) !== -1 && addedcartitems.indexOf(id) === -1){
      for(let item of items){
        if(id === item.id ){
          addedcartitems.push(id);
          this.state.cartLiitemList.push(<li key={id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            {/* <div>{this.state.finalprice}</div> */}
            <div>
            <input onChange={(e) => {this.onChange(e, item.price)}}
            id="amount" name="qun" type="number" />
            </div>
          </li>)
          this.state.cartjsonlis.push({id:id,item:item.name,price:item.price,quntity:this.state.qun})
        }
      }
    }
    
   
    // console.log("cart items....",id)
    return(
      <div>
        <h1>Cart</h1>
        <div>
          <ul>
            {this.state.cartLiitemList}
           
          </ul>
          {this.state.qun}
          <button onClick={this.BuyItems}>Buy Items</button>
        </div>
      </div>
    );
  }
}


class ItemCompont extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        id:0
    }
    this.addTocartHandler = this.addTocartHandler.bind(this);
  }

  addTocartHandler(){
    this.setState({id:this.props.id},() => {
      console.log("in add to handler",this.state.id)
    })
    console.log("in add to handler",this.props.id)
    this.props.AddCartItems(this.props.id)
    console.log(this.props.carts)
   
  }


  render(){
    const id = this.props.id;
    return(
      <li id = {this.props.id}>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.price}</div>
        <button onClick={this.addTocartHandler}>Add To Cart</button>
      </li>
    );
  }
}


class ItemListComponent extends React.Component{
    constructor(props){
      super(props);
        this.state = {
          itemcomlis:[],
          cartList:[],
          cartItemId:0
      }
      this.addcartitem = this.addcartitem.bind(this);
    }

    addcartitem(cartitem){
      this.setState({cartItemId:cartitem})
        if(this.state.cartList.length <= 0){
          this.setState({
            cartList: this.state.cartList.concat([cartitem])
          })
        }else{
          this.setState({
            cartList: this.state.cartList.concat([cartitem])
          })
        }
        console.log(cartitem,"cartitem")
    }
    
    componentWillMount(){
      console.log("In componet Will Mount");
      for (let item of items){
        this.state.itemcomlis.push(
          <ItemCompont AddCartItems={this.addcartitem.bind(this)} carts={this.state.cartList} id={item.id} item={item} cartlis={this.state.cartList}/>
        )
      }
    }

    componentDidMount(){
      console.log("In componet Did Mount")
    }

    componentWillReciveprops(){
      console.log("component will recive props")
    }

    componentWillUpdate(){
      console.log("hello from component will update.")
    }
  
    componentDidUpdate(){
      console.log("hello from component did update.")
    }

    

      render(){
        console.log("in Render")
        return(
          <div>
            <ul>
              {
                this.state.itemcomlis
              }
            </ul>
            <CartComponent cartitemid={this.state.cartItemId} cartIdList={this.state.cartList}/>
          </div>
        );
      }
}

ReactDom.render(<ItemListComponent />,document.getElementById("root"));