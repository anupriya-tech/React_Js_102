import React from 'react';
import ReactDOM from 'react-dom';
import { useState , useEffect } from 'react';
import './myStyle.css'; 


function RegisterationForm() {
  const [values, setValues] = useState({
    inputEmailAddress: '',
    inputPassword: '',
   });

   useEffect(() => console.log ((values), [values])); 

//    useEffect(() => {
//    setValues();
//   }, []);

   
   const Set = name => {
     return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
      }
  	};
	   
	    function redirectPage(props){
			//alert(values.inputEmailAddress + values.inputFirstName + values.inputPhoneNumber); 
			if(values.inputEmailAddress !== '' && values.inputPassword !== '')   
			{
			   window.location.href = "welcome.html";
			}
			else{
				alert("Emiail and password Should not be Empty !!! Try Again");
			   return false;
			}
		}

   return (
   <form>
    <h3>Login</h3>
 		<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputEmailAddress">Email Address <b class="mandetory">*</b></label>
			  <input type="email" value={values.inputEmailAddress} onChange={Set('inputEmailAddress')} name="inputEmailAddress" id="inputEmailAddress" class="form-control box_to_line"  />
			</div>
			<div class="form-group col-md-6">
			  <label for="inputPassword">Password <b class="mandetory">*</b></label>
			  <input type="password" value={values.inputPassword} onChange={Set('inputPassword')} name="inputPassword" id="inputPassword" class="form-control box_to_line"  />
			</div>
		</div>
		<br />
		<div class="form-row">
			<div class="form-group col-md-12 text-center">
				<button type="button" name="signUpbtn" id="signUpbtn" class="btn btn-success" onClick={redirectPage} >Sign Up</button>
			</div>
		</div>
    <div class="form-row centerAlign">
      <div class="form-group col-md-12">
        <a href="./signUp.html" >Not Registered, Click here For Sign Up.</a>
      </div>
    </div>
	</form>
   );
}


ReactDOM.render(
      <RegisterationForm />,document.getElementById('root')
);