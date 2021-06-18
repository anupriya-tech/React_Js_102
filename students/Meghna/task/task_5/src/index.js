import React from 'react';
import ReactDom from 'react-dom';

const country=["India","America"]
  
const statejson = {
  "India":["A.P","Tamilnadu"],
  "America":["california","texas"]
}

const cityjson = {
  "A.P":["HydreBAd","Banglore"],
  "Tamilnadu":["Chennai","Madhurai"],
  "california":["LosAngles","San Francisco"],
  "texas":["Dollas","House ton"]
}

class SignUpForm extends React.Component{
    constructor(props){
      super(props);
        this.state = {
          user:'',
          fname:'',
          lname:'',
          pwd:'',
          cpwd:'',
          mail:'',
          phno:'',
          country:'',
          statenames:'',
          city:''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    handleSignIn(event){
      event.preventDefault();
      console.log("data===>",this.state.user,this.state.fname,this.state.lname,
      this.state.mail,this.state.phno,this.state.pwd,this.state.cpwd,this.state.country,
      this.state.statenames
      ,this.state.city)
    }

      render(){
        return(
          <div>
            <form onSubmit={this.handleSignIn}>
            <fieldset>
            <legend>SignUp From:</legend>
            <label>
              Full Name:
            </label>
              <input type="text" name="user" value={this.state.user} onChange={this.handleChange}></input><br></br>
            <label>
              FristName:
              <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange}></input><br></br>
            </label>
            <label>
              LastName:
              <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange}></input><br></br>
            </label>
            <label>
              Mail Id:
              <input type="email" name="mail" value={this.state.mail} onChange={this.handleChange}></input><br></br>
            </label>
            <label>
              Number:
              <input type="tel" name="phno" value={this.state.phno} onChange={this.handleChange}></input><br></br>
            </label>
            <label>
              Password:
              <input type="password" name="pwd" value={this.state.pwd} onChange={this.handleChange}></input><br></br>
            </label>
            <label>
              Confirm Password:
              <input type="password" name="cpwd" value={this.state.cpwd} onChange={this.handleChange}></input><br></br>
            </label>
            <label>Country:</label>
            <select name="country" value={this.state.country} onChange={this.handleChange}>
              <option value="India">India</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Armenia">Armenia</option>
              <option value="Malaysia">Malaysia</option>
            </select>
            <label>Sate:</label>
            <select name="statenames" value={this.state.statenames} onChange={this.handleChange}>
              <option value="a.p">A.P</option>
              <option value="tamilnadu">TamilNadu</option>
              <option value="kerla">Kerla</option>
              <option value="delhi">Delhi</option>
            </select>
            <label>City:</label>
            <select name="city" value={this.state.city} onChange={this.handleChange}>
              <option value="HydreBad">HydreBad</option>
              <option value="Banglore">Banglore</option>
              <option value="Pune">Pune</option>
              <option value="Msaharastra">Msaharastra</option>
            </select>
            <input type="submit" value="signup"></input>
            </fieldset>
            </form>
          </div>
        );
      }
}

ReactDom.render(<SignUpForm />,document.getElementById("root"));