import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import React from 'react';


function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Successfully Logged in` + state.email)
    }

    return(
      <div>
      <form onSubmit={handleSubmit}>
      <input type="email" id="email" placeholder="Enter email" value={state.email} onChange={ handleChange} />
   
      <input type="password"  id="password" placeholder="Password" value={state.password} onChange={handleChange}  />

        <button type="submit" value="Submit" >Login</button>
        <button type="submit" value="Submit" >logout</button>
        </form>
     </div>
    );}
    ReactDOM.render(
        <RegistrationForm />
        ,document.getElementById("root") );