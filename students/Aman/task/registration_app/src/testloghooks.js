import React, { useState } from 'react';



const testLogin=()=>

{


const[user,setUser]  = useState({email:"",password:"",remember_me:false,loggedin:false});




const login=(e)=>
{
e.preventDefault();

            if(user.email=="" || user.password=="")
            {

                alert("Please dont leave filed blank");    
            }
            else if(user.email=="amanaggarwal044@gmail.com" && user.password=="1234"){
            setUser({loggedin:true})    
            alert("login Successfull");
            }
            else{

                alert("Invalid Credentials");
            }

console.log(user);
}

const loginhandler=(e)=>
{
    e.preventDefault();
/*    way 1
    //here we are making a generic function to handle the events
    const tar=e.target;
    const name=tar.name;
    const value=tar.value;
    setUser({...user,[name]:value})
    console.log(name+" "+value);
//here we are setting the value. First we are copying the data with ...user using spread op and then we are adding the value */  

    /* way 2 
    shortcut
    const {name,value} = e.target;
    setUser({ ...user, [name]:value});
*/

//way 3: To handle the checkbox also with this handler so we have to make more generic code
const tar=e.target;
const name=tar.name;
const value=tar.name==="remember_me"?tar.checked:tar.value;
setUser({...user,[name]:value})
//here with using strict equal we are comparing the target name and adding that value and also we are using ternary op
}


    return (

<div>
{user.loggedin?<div>

<h1>Hello Mr., You have Successfull logged in</h1>

</div>
:<div>
<h1>login App</h1>
<form>

Email: <input type="email" placeholder="enter your email" value={user.email} id="email" name="email" onChange={loginhandler}  autoFocus required/><br/>
Password: <input type="password" placeholder="enter password" value={user.password} id="password" name="password" onChange={loginhandler} required/><br/>
Remember Me: <input type="checkbox" onChange={loginhandler} checked={user.remember_me} name="remember_me" id="remember_me"/><br/>
<input type="submit"  value="logIn" onClick={login}/>


</form>
</div>}




</div>


    );

}

export default testLogin;