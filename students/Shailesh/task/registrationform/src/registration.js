import React, { useState } from 'react';
import './index.css'



function Registrationform() {

const [userRegistration, setuserRegistration ] = useState({
    username: '',
    email: '',
    city: '',
    stateName: '',
    address: ''
});

const [newData, setnewData] = useState([]);

 function handelChangeInput(event){
     const name = event.target.name;
     const value = event.target.value;
     console.log(name , value);

     setuserRegistration({...userRegistration, [name] : value  })
 };

 function handelSubmit(event){
     event.preventDefault();
     const newRecord = {...userRegistration, id : Math.random()};
     console.log(newData);
     setnewData([...newData, newRecord]);
     console.log(newData);

     setuserRegistration({
        username: '',
        email: '',
        city: '',
        stateName: '',
        address: ''
     })
 };

  return (
    <div className="form">
       
       <form action='' onSubmit={handelSubmit}>
           <div className='user-box'>
               <label>Fullname : </label>
               <input type='text' name='username' value={userRegistration.username} id='username' onChange={handelChangeInput} />
           </div>
           <div className='user-box'>
               <label>Email : </label>
               <input type='text' name='email' value={userRegistration.email} id='email' onChange={handelChangeInput} />
           </div>
           <div className='user-box'>
               <label>City Name : </label>
               <input type='text' name='city' value={userRegistration.city} id='city' onChange={handelChangeInput} />
           </div>
           <div className='user-box'>
               <label>State : </label>
               <input type='text' name='stateName' value={userRegistration.stateName} id='stateName' onChange={handelChangeInput} />
           </div>
           <div className='user-box'>
               <label>Address : </label>
               <input type='text' name='address' value={userRegistration.address} id='address' onChange={handelChangeInput} />
           </div>

           <button type='submit'>Regiter</button>
       </form>

       <div className='records-data'>
           {
               newData.map((curRecord) => {
                   return(
                       <div className='current-data'>
                         <p>{curRecord.username}</p>
                         <p>{curRecord.email}</p>
                         <p>{curRecord.city}</p>
                         <p>{curRecord.stateName}</p>
                         <p>{curRecord.address}</p>
                       </div>
                   )

               })
            }
       </div>
      
    </div>
  );
}

export default Registrationform;
