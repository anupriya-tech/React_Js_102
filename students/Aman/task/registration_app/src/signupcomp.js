import React, { useState } from 'react';
import './App.css';



const Signupcomp=()=>

{

const userRegistry=useState({firstname:"",lastname:"",password:"",});

    const register=()=>
    {



    }
    
    
    return(
<div style={{marginTop:"40px"}}>
<h1>Register with us</h1>
                                <div className="row register-form">
                                <div className="col-4 offset-2">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *" 
                                            onChange={register}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *"  
                                            onChange={register} required/>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" 
                                            onChange={register} required/>
                                        </div>

                                    </div>
                                    <div className="col-4">
                                        
                                    <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *" onChange={register}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" minLength="10" maxLength="10" name="txtEmpPhone" className="form-control" placeholder="Phone *" onChange={register}
                                            />
                                        </div>
                                        

                                        <div className="form-group">

                                            <input type="password" className="form-control"  placeholder="Confirm Password *" onChange={register}/>
                                        
                                        </div>
                                        
                                        
                                    
                                    </div>

                                   
                                   
                                                                   </div>



<div className="row">
    <div className="col-3 offset-2">

    State:<input list="state_list" placeholder="--choose state--" name="state" id="state" autoComplete="off"/>

<datalist id="state_list">
  <option value="Haryana"/>
  <option value="Punjab"/>
  <option value="Delhi"/>
  <option value="Maharastra"/>
  <option value="Uttar Pradesh"/>
</datalist>


    </div>

</div>



                          <div className="row">
                              <div className="col-6">
               
        <input type="submit" className="btnRegister" style={{paddingTop:"5px",paddingBottom:"5px",paddingLeft:"12px",paddingRight:"12px"}}  value="Register"
                                        onChange={register}/> 
                                        </div>
                                        </div>        

    </div>);


}

export default Signupcomp;