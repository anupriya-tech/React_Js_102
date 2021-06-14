import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import pic from '../images/sb.jpg'
import '../bootstrap.css'

class Toggle_button extends Component {
  constructor()
  {
    super()


  }
  render() {
    return(<div>
    <button onClick={this.props.on} className="btn btn-success" >Switch On </button>
<button onClick={this.props.off} className="btn btn-default"> Switch Off</button>
<button onClick={this.props.break} className="btn btn-success">Break</button>
</div>
)

  }
}

export default Toggle_button;
