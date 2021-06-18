import React,{useState} from 'react';


function LoginWithHook(){
    const[user, setUser] = useState({username:'', password:''})
  
  
    const handleLogin=(login)=>{ login.preventDefault();
      alert("Successfully loggedIn")
     }
      const handlelogout=(logout)=>{logout.preventDefault();
      alert("Please login")
      }
         return(
           <div>
             <p><b>Login Page</b></p>
           <label> UserName : 
             <input type="text" value={user.username.value} ></input>
           </label><br></br>
  
            <label> Password   : 
            <input type="text" value={user.password.value} ></input>
          </label><br></br>
            <button onClick={handleLogin}>Login</button>
             <button onClick={handlelogout}>Logout</button>
        </div>
         )
       
    }
    export default LoginWithHook