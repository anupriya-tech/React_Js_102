import './App.css';
import React,{ Component } from 'react';

class App extends Component {

state={togButton:false}
handler=()=>
{
  const checkstate=this.state.togButton;
  this.setState({togButton:!checkstate});

  var checkBox = document.getElementById("toggleCheckBox");
  if (checkBox.checked){
    document.getElementById("toggleCheckBox").removeAttribute('checked');
  } else {
    document.getElementById("toggleCheckBox").setAttribute('checked', 'checked');
  }


}

  render(){


    return (
    <div >
      <h1 className="text-center">This is Image Toggle App</h1>


{
this.state.togButton?
<div className="text-center">
<img style={{marginTop:"1%"}} src="Assests/musk1.jpg" width="300dp" height="300dp" alt="wait until loads"/>
</div>:

<div className="text-center">
<img style={{marginTop:"1%"}} src="Assests/doge1.jpeg" width="300dp" height="300dp" alt="wait until loads"/>
</div>

}



      <div className="text-center" style={{marginTop:"1%"}}>
        <label className="switch">
  <input type="checkbox" id="toggleCheckBox" onClick={this.handler}/>
  <span className="slider round"></span>
      </label>
        </div>
    </div>
     );
}}

export default App;
