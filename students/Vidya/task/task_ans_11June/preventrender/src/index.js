import React from 'react';
import ReactDOM from 'react-dom';
import myhero from './drKalam.jpg';
import './index.css';


function Blog(props){
  if(!props.blg){
    return null;
  }
  return(
    <div className="blging">
      <p>   
      <img src={myhero} alt="Dr Kalam" />
      <h1>Avul Pakir Jainulabdeen Abdul Kalam <sub>(15 October 1931 – 27 July 2015)</sub> </h1>
        He was an Indian aerospace scientist who served as the 11th President of India from 2002 to 2007.<br/>
        He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering.<br/>
        He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO)<br/> and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts.<br/>
        He thus came to be known as the Missile Man of India for his work on the development of ballistic missile and launch vehicle technology.<br/>
        He also played a pivotal organisational, technical, and political role in India's Pokhran-II nuclear tests in 1998, <br/>the first since the original nuclear test by India in 1974.<br/>
        Kalam was elected as the 11th President of India in 2002 with the support of both the ruling Bharatiya Janata Party and the then-opposition Indian National Congress.<br/>
        Widely referred to as the "People's President", he returned to his civilian life of education, writing and public service after a single term. He was a recipient of several prestigious awards, <br/> including the Bharat Ratna, India's highest civilian honour.</p>
      </div>
  );
}

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {showblging: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState(state => ({showblging: !state.showblging}));
  }

  render(){
    return(
    <div>
      <Blog blg = {this.state.showblging} />
      <button onClick={this.handleToggleClick}>
          {this.state.showblging ? 'Close Blog' : 'Read Blog'}
      </button>
    </div>
    );
  }

}

ReactDOM.render(
  <MyComponent />
  ,document.getElementById("root") );