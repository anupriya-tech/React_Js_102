import React, { useState } from 'react';

function Loginform(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allnewEntry, setnewEntry] = useState([]);

    function handelSubmit(e){
        // const newEntry = {}
        alert('Email: ' + email + ' , ' +' '+  'Password: ' + password) 
    }

    return (
        <div className="form">
           
           <form action='' onSubmit={handelSubmit} >
               <div className='user-box'>
                   <label>Email: </label>
                   <input type='text' name='email' value={email} id='email' 
                    onChange={ (e) => setEmail(e.target.value) } />
               </div>
               <div className='user-box'>
                   <label>Password : </label>
                   <input type='password' name='password' value={password} id='password'
                      onChange={ (e) => setPassword(e.target.value) }   />
               </div> 
               <button type='submit'>Login</button>
           </form>
    
          

        </div>   
    );   

}
export default Loginform;