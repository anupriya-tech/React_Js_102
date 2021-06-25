import React from 'react';
import ReactDOM from 'react-dom';
import { useState , useEffect } from 'react';
import  options from './options.js'; 
import  countryList from './country';
import  SQ from './secutiryQuestions.js';
import './myStyle.css'; 


function RegisterationForm() {
  const [values, setValues] = useState({
    inputFirstName: '', 
    inputMiddleName: '',
    inputLastName: '',
    inputCountry: '',
    inputState: '',
    inputCity: '',
	inputAddress: '',
    inputDateOfBirth: '',
    inputEmailAddress: '',
    inputPhoneNumber: '',
    inputSecurityQuestion: '', 
    inputSecurityAnswer:''
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
	  function printDetails(props) {
		  document.getElementById("divId").style.display = "block";
		  
	  }

   return (
	   
   <form>
	   <div id="divId" style={{display:"none"}}>
	   		Name: {values.inputFirstName} {values.inputMiddleName} {values.inputLastName}.<br/>
			Address : {values.inputAddress}, {values.inputCity}, {values.inputState}, {values.inputCountry}. <br/>
			Personal Details : {values.inputDateOfBirth}. {values.inputPhoneNumber}, {values.inputEmailAddress} <br/>
			Security Question : {values.inputSecurityQuestion} <br/>
			Security Ans :{values.inputSecurityAnswer} <br/>
		</div>
    <h3>Sign Up</h3>
	
		<div class="form-row">
			<div class="form-group col-md-4">
			  <label for="inputFirstName">First Name <b class="mandetory">*</b></label>
			  <input type="text" value={values.inputFirstName} onChange={Set('inputFirstName')} name="inputFirstName" id="inputFirstName" class="form-control box_to_line" />
			</div>
			<div class="form-group col-md-4">
			  <label for="inputMiddleName">Middle Name <b class="mandetory">*</b></label>
			  <input type="text" value={values.inputMiddleName} onChange={Set('inputMiddleName')} name="inputMiddleName" id="inputMiddleName" class="form-control box_to_line" />
			</div>
			<div class="form-group col-md-4">
			  <label for="inputLastName">Last Name <b class="mandetory">*</b></label>
			  <input type="text" value={values.inputLastName} onChange={Set('inputLastName')} name="inputLastName" id="inputLastName" class="form-control box_to_line"  />
			</div>
	  </div>
    		

		<div class="form-row">
      		<div class="form-group col-md-3">
			  <label for="inputCountry">Country <b class="mandetory">*</b></label>
			  <select  value={values.inputCountry} onChange={Set('inputCountry')} name="inputCountry" id="inputCountry" class="form-control box_to_line_select">
				<option>.......Select Country.......</option>
				{countryList.map(c => <option key={c}> {c} </option>) };
			  </select>
			</div> 
			<div class="form-group col-md-3"> 
				<label for="inputState">State <b class="mandetory">*</b></label>
				<select  value={values.inputState} onChange={Set('inputState')} id="inputState"  name="inputState" class="form-control box_to_line_select">
				<option>.......Select State.......</option>
				{options.map(c => <option key={c}> {c} </option>) };
				</select>
			</div>
			<div class="form-group col-md-3">
			  <label for="inputCity">City <b class="mandetory">*</b></label>
			  <input type="text" value={values.inputCity} onChange={Set('inputCity')} name="inputCity" id="inputCity" class="form-control box_to_line"  />
			</div>
			<div class="form-group col-md-3">
			  <label for="inputAddress">Local Address <b class="mandetory">*</b></label>
			  <textarea value={values.inputAddress} onChange={Set('inputAddress')} name="inputAddress" id="inputAddress" class="form-control box_to_line" style={{height: "22px"}}>

			  </textarea>
			</div>
		</div>

		<div class="form-row">
			<div class="form-group col-md-12"> 
			  <label for="inputDateOfBirth">Date Of Birth <b class="mandetory">*</b></label>
			  <input type="date" value={values.inputDateOfBirth} onChange={Set('inputDateOfBirth')} name="inputDateOfBirth" id="inputDateOfBirth" class="form-control box_to_line" />
			</div>
		</div> 
		<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputPhoneNumber">Phone Number <b class="mandetory">*</b></label>
			  <input type="text" value={values.inputPhoneNumber} onChange={Set('inputPhoneNumber')} name="inputPhoneNumber" id="inputPhoneNumber" class="form-control box_to_line"  />
			</div>
			<div class="form-group col-md-6">
			  <label for="inputEmailAddress">Email Address <b class="mandetory">*</b></label>
			  <input type="email" value={values.inputEmailAddress} onChange={Set('inputEmailAddress')} name="inputEmailAddress" id="inputEmailAddress" class="form-control box_to_line"  />
			</div>
		</div>
    		<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputSecurityQuestion">Security Question <b class="mandetory">*</b></label>
			  <select id="inputSecurityQuestion" value={values.inputSecurityQuestion} onChange={Set('inputSecurityQuestion')} name="inputSecurityQuestion" class="form-control box_to_line_select" >
			 	 <option>.......Select Security Question.......</option>
				{SQ.map(c => <option key={c}> {c} </option>) };
			  </select>
			</div>
	
			<div class="form-group col-md-6">
			  <label for="inputSecurityAnswer">Security Answer <b class="mandetory">*</b></label>
			  <input type="text" value={values.inputSecurityAnswer}   onChange={Set('inputSecurityAnswer')} name="inputSecurityAnswer" id="inputSecurityAnswer"  class="form-control box_to_line"  required />
			</div>
		</div>
		<br />
		<div class="form-row">
			<div class="form-group col-md-12 text-center">
				<button type="button" name="signUpbtn" id="signUpbtn" class="btn btn-success" onClick={printDetails} >Sign Up</button>
			</div>
		</div>
    <div class="form-row centerAlign">
      <div class="form-group col-md-12">
        <a href="./signIn.html" >Already Sign Up, Click here For Sign In.</a>
      </div>
    </div>
	</form>
   );
}


ReactDOM.render(
      <RegisterationForm />,document.getElementById('root')
);