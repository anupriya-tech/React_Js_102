import React from "react";
import ReactDOM from "react-dom";

import bulbOff from "./offBulb.JPG";
import bulbOn from "./onBulb.JPG";

import "./index.css";

function BulbOn(props) {
  return <img className="imgStyle" src={bulbOn} alt="Bulb is ON" />;
}

function BulbOff(props) {
  return <img className="imgStyle" src={bulbOff} alt="Bulb is OFF" />;
}

function OnButton(props) {
  return <button onClick={props.onClick}>OFF</button>;
}

function OffButton(props) {
  return <button onClick={props.onClick}>ON</button>;
}

function Bulb(props) {
  const isTrue = props.isTrue;

  if (isTrue) {
    return <BulbOff />;
  }
  return <BulbOn />;
}

class BulbState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnIn: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isOnIn: true });
  }

  handleOffClick() {
    this.setState({ isOnIn: false });
  }

  render() {
    const isOn = this.state.isOnIn;
    let button;

    isOn
      ? (button = <OffButton onClick={this.handleOffClick} />)
      : (button = <OnButton onClick={this.handleOnClick} />);

    return (
      <div>
        <Bulb isTrue={isOn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<BulbState />, document.getElementById("root"));
