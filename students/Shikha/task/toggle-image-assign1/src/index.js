import React from 'react';
import ReactDOM from 'react-dom';

const imagesPath = {
  off: "https://bestanimations.com/media/bulbs/2014598748tumblr_nq3a0iw1wH1takhpwo1_500.gif",
  on: "https://i.pinimg.com/originals/df/30/ce/df30ce307f9cfe83914bd0bb0f6c5ed1.gif"
}

class MyToggleImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn: true};
    this.myHandlerClick = this.myHandlerClick.bind(this);
  }

  myHandlerClick() {
      this.setState(state => ({ isOn: !state.isOn }));
      console.log("Image changed successfully");
  }

  getImageName = () => this.state.isOn ? 'on' : 'off'


  render() {
    const imageName = this.getImageName();
      return (
        <div>
          <img style={{ maxWidth: '400px' }} src={imagesPath[imageName]} onClick={this.myHandlerClick} alt="Not found"/>
        </div>
      );
  }
}

ReactDOM.render(<MyToggleImg />, document.getElementById("root"));
