import React from 'react';
import ReactDOM from 'react-dom';


const imagesPath = {
    on: "https://lh3.googleusercontent.com/-DaL3Gvfj63A/YMXlLjyj_fI/AAAAAAAABcs/Bz2TKhnaQ38SkhV-zULlZlZ6iZNLaU72wCLcBGAsYHQ/s512/bulb%2Bon.png",
    off: "https://lh3.googleusercontent.com/fife/AAWUweVTie8Fc0fPCuGeIk14EeI02pWAL1pwwM8eI_1eLA5EiwcqcyX4sqZ_ekcP57Ytmtv4pWFCehl3rEe69nXtfYWBWTnTXIzmXgE3TNIJuDD7Hus0fRoOK9Ue5iBqxTrYTPBgzIpyhPFSKVAeJjNsv4Rl_I-SyiqmNqSIPvnwutrxf4hodoUWSVSHSthQUn7kb9-OEelyDVnwYSkWBJ67ryh3QlVcc2wj7ZSgjDSb7gFDXO166bn3CIJwMppCncI_cqmTBIEOmjJ3t_FbuU9NYIPv7Q3l4ka6cBbb7jq1TXCHrXAcu0ovXPWY3hes7kW1-QGc6QpvSL9ujb0SsEdtkA_RRDJiRrxdTSpyVD2ldmJWZ13BcQYiIVrr5x7ZISS9ZxDRv4ZhKAPb3wz14yHzQEdN9erTCldorQTV1vjD8xPCECL2NmuuYur7M14i4u-4ulH2GrgVid_pS2vQmGn9G57MeWJFAqUmgR1kblogNKE7hUDG0IrYIIagrqCdqhDXaWJyzlab6KWkFmPFYQeEs7hyjPjI-fF5tz-zStzHw2wYtpSgiOQ4coICwhSnt13R4iq3Nf16bZqUKwfL4ryf3g0SqF7svPzhYBM2lDg8HmjaBKrTlKAtmu2VvL8EGqcWzIh0ZnAs-NushzmTxc8Cbg_LMXyCeIsnapj-BEBSVCJCRsCdJPSyWICEfaAt60GWdpn5fS1SaFOfFzA8YU7yU3YRhkx4ylafMyS5=w264-h260?authuser=0"
  }
  
  class Mytoggle extends React.Component {  //  Declaring class
    state = {                                  
      open: true                              //  Declaring state and assigning the boolean value true to open
    }
    toggleImage = () => {
      this.setState(state => ({ open: !state.open }))  // Setting the state using setState
    }
  
    getImageName = () => this.state.open ? 'on' : 'off'  /* Getting the image based on state 
    If on it will give show one and off the other */
  
    render() {
      const imageName = this.getImageName();
      return (
        <div>
          <img style={{maxWidth: '250px'}} src={imagesPath[imageName]} onClick={this.toggleImage} /> 
          yes state is getting changed  
        </div>   //  In render we will render that image based on style defined and on click action of toggle
      );
    }
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Mytoggle />, rootElement);



