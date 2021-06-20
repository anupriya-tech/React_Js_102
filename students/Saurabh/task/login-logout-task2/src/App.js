import React, {useState} from 'react'

function App(props) {


  const [name, setName] = useState();
  const [pass, setPass] = useState();
 
  const inputEvent = (event) => {
    // console.log(event.target.value)
    setName(event.target.value);
  };
  
  const inputPassEvent = (event) => {
    // console.log(event.target.value)
    setPass(event.target.value);
};

const onSubmits = (event) => {
  // console.log('i clicked', event);
  if((name) && (pass)){
   alert(`Name: ${name}, Password: ${pass}`);
  
}
else {
    alert('Not submitted');
}
  event.preventDefault();


};
const logout=() => {
  localStorage.clear();

}

    return (
        <>
        <form onSubmit={onSubmits}>
        <div>
        <label for="inputEmail">Email</label>
           <input type="text" id="inputEmail"  placeholder="Enter the name" onChange={inputEvent} value={name} />
           </div>
           <div>
        <label for="inputPass">Password</label>
       <input type="passward" id="inputPass" placeholder="Enter the name" onChange={inputPassEvent} value={pass} />
       </div>
       <div>
       <button className="btn btn-primary" type="submit" onClick={props.click}>Login</button>
       </div>
       </form>



       <div>
   <button onClick={logout()}>LOGOUT</button>
</div>
        </>
    )
}

export default App
