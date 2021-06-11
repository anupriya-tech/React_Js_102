import React from 'react';
import ReactDOM from 'react-dom';

class MytoggleImage extends React.Component(){
    constructor(props){
        super(props);
            this.state = {isOnButton : true};
            this.myHandler = this.myHandler.bind(this);
       }

       myHandler(){
           this.setState(state => ({
               isOnButton : !state.isOnButton
           })
           );
 console.log ("yes the state is getting changed");
    }



render(){
    return(
    <button onClick={this.myHandler}>{this.state.isOnButton ? '<img src="image/imageONbulb.jpg">' : '<img src="image/imageOFFbulb.jpg">'}</button>
    );
};
}

ReactDOM.render(
    <MytoggleImage />
    ,document.getElementById("root"));


