import React from 'react';
import ReactDOM from 'react-dom';

const imagesPath = {
  on: "https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg",
  off: "https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg"
}

class MyToggleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.myHandler = this.myHandler.bind(this);
  }

  myHandler() {
      this.setState(state => ({
        isOn: !state.isOn
        })
      );
    console.log("yes state is getting changed.");
  }

  getImageName = () => this.state.isOn ? 'on' : 'off'


  render() {
    const imageName = this.getImageName();
      return (
        <div>
          <img style={{ maxWidth: '250px' }} src={imagesPath[imageName]} onClick={this.myHandler} alt="Not found"/>
        </div>
      );
  }
}

ReactDOM.render(<MyToggleComp />, document.getElementById("root"));

