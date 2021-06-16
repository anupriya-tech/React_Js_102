
import React from 'react';
import ReactDOM from 'react-dom';

function ImageOne(props){
  return <img src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="image-1" />;
}

function ImageTwo(props){
  return <img src="http://images4.fanpop.com/image/photos/21800000/Beautiful-Sunset-beautiful-nature-21887707-1000-565.jpg" alt="image-2" />;
}

function ChangeImageOne(props){
  return(
    <button onClick={props.onClick}>Change</button>
  );
}

function ChangeImageTwo(props){
  return(
    <button onClick={props.onClick}>Change</button>
  );
}

function ChangeImage(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <ImageOne />;
  }
  return <ImageTwo />;
}

class ToggleImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {imageOne: false};
    this.imageOneClick = this.imageOneClick.bind(this);
    this.imageTwoClick = this.imageTwoClick.bind(this);
  }

  imageOneClick(){
    this.setState({imageOne: true});
  }

  imageTwoClick(){
    this.setState({imageOne :false});
  }

  render(){
    const imageToggle = this.state.imageOne;
    let button;

    {imageToggle ?
      button = <ChangeImageTwo onClick={this.imageTwoClick} />
      :
      button = <ChangeImageOne onClick={this.imageOneClick} />
    }

    return (
      <div>
        <ChangeImage isTrue={imageToggle} />
        {button}
      </div>
    );
  }

}

ReactDOM.render(
  <ToggleImage />
  ,document.getElementById("root") );