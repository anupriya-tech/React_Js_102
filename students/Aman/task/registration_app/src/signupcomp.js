import React, { useState, useEffect} from 'react';
import './App.css';



const Signupcomp=()=>
{



useEffect(() => {

        var str=''; // variable to store the options
var month = new Array("Haryana","Punjab","Maharastra","Uttar Pradesh","Delhi");
for (var i=0; i < month.length;++i){
str += '<option value="'+month[i]+'" />'; 

var my_list=document.getElementById("state_list");
my_list.innerHTML = str;

}


        
      });

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
</datalist>


    </div>
    <div className="col-3">
    City:<input list="state_list" placeholder="--choose city--" name="city" id="city" autoComplete="off"/>

<datalist id="state_list">
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