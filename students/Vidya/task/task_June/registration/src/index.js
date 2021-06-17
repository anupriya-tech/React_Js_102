import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Contries= ['India', 'USA', 'Canda'];
const States= ['Maharastra', 'Madyapradesh', 'Panjab'];

function RegisterationForm() {
  const [values, setValues] = useState({
    name: '', age: '', email: '', contact: '', country: '', states: '',  city: '', address: '' 
  });

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
      }
  };

  return (
    <form>
      <h2>Registeration Form</h2>

      <label>Full Name:</label>
      <input value={values.name} onChange={set('name')} />

      <label>Age:</label>
      <input value={values.age} onChange={set('age')} />

      <label>Email:</label>
      <input value={values.email} onChange={set('email')} />

      <label>Contact:</label>
      <input value={values.contact} onChange={set('contact')} />

      <label>Country:</label>
      <select value={values.country} onChange={set('country')}>
        <option value="">Select Country</option>
        {Contries.map(c => <option key={c}>{c}</option>)}
      </select>

      <label>State:</label>
      <select value={values.color} onChange={set('color')}>
        <option value="">Select State</option>
        {States.map(c => <option key={c}>{c}</option>)}
      </select>

      <label>City:</label>
      <input value={values.city} onChange={set('city')} />
     

      <label>Address:</label>
      <textarea value={values.address} onChange={set('address')} />

      <button type="submit">Submit</button>
      <div id="putValues">

      </div>
    </form>
  );
}


ReactDOM.render(
      <RegisterationForm />,document.getElementById('root')
);



