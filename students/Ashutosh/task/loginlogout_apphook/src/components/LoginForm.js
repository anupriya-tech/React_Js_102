import React,{useState} from 'react';
function LoginForm({Login,error}){
    const [details,setDetails]=useState({name:"",email:"",password:""});
    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    return(
        <form onSubmit={submitHandler}>
        <div>
        <h2>Login</h2>
        <div>
        <label>Name</label>
        <input type="text" name="name" id="name" onChange={e=>setDetails({...details,name:e.target.vale})} value={details.name}/>
        </div>

       <div>
        <label>Email</label>
        <input type="text" name="email" id="email" onChange={e=>setDetails({...details,email:e.target.vale})} value={details.email}/>
        </div>

       <div>
        <label>Password</label>
        <input type="text" name="passwrd" id="password" onChange={e=>setDetails({...details,password:e.target.vale})} value={details.password} />
        </div>
        <input type="submit" value="Login"/>
        </div>
        </form>
    )
}
export default LoginForm