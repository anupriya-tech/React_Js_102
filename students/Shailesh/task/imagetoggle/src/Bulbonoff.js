// import React from  'react';
// import ReactDOM  from 'react-dom'
// import img1 from './images/bulboff.jpg';
// import img2 from './images/bulbOn.jpg';

// class Bulbonoff extends React.Component {
//     constructor(props) {
//         super(props);
//             this.state = { isOn:true};
//             this.myhandler = this.myhandler.bind(this);
//         }
//         myhandler(){
//         this.setState( state => ({
//             isOn: !state.isOn
//         })
//         );
//         console.log('it is working handler');
//     }   
//     render(){
//         return(
//             <button onClick={this.myhandler}> {this.state.inOn ? 'ON' : 'OFF' } </button>
//         );
//     }  

// }

// export default Bulbonoff;