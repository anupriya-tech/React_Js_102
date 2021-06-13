import React from "react"
import ReactDOM from "react-dom"
const imagePath={
    ON:"https://s3.gomedia.us/wp-content/uploads/2009/10/LightBulb1.jpg",
    OFF:"https://thumbs.dreamstime.com/b/trun-tungsten-light-bulb-realistic-photo-image-28388625.jpg"
}

class ToggleImage extends React.Component{

state={
    isOn:true
}

toggleImages=()=>{
    this.setState(state=>({isOn:!state.isOn}))
}

getImageName=()=>this.state.isOn ? 'ON' : 'OFF'

render(){
    const imageName =this.getImageName();
    return(
        <div>
            <img src={imagePath[imageName]} onClick={this.toggleImages}/>
        </div>
    )
}

}

ReactDOM.render(<ToggleImage/>,document.getElementById('root'))
export default ToggleImage