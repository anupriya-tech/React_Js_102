
let form = document.getElementById("SignupForm");

form.onsubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    if(validate_form(formData)){
       document.getElementsByClassName("container")[0].innerHTML = "<h1>You are signed up succesfully.</h1>"
    }
    
}

function validate_form(data){ 
    const rx_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const rx_pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    for(var [name, value] of data.entries()) {

        if(value === null || value === ""){

            alert(name+" field cannot be left blank");
            document.getElementsByName(name)[0].focus();
            return false

        }else if(name == 'email' && !rx_email.test(value)){
            
            alert("Invalid Email ID. Please enter a valid Email Address.")
            document.getElementsByName(name)[0].focus();
            return false

        }else if(name == 'password' && !rx_pass.test(value)){
            
            alert("Invalid Password. Password must contain atleast 6 charachter with atleast 1 Number, 1 Uppercase, 1 Lowecase letter and 1 special character [#?!@$%^&*-].")
            document.getElementsByName(name)[0].focus();
            return false

        } else if(name == 'confPassword' && value !== data.get('password')){
            
            alert("Password do not match. Please confirm password carefully")
            document.getElementsByName(name)[0].focus();
            return false
        
        } else{
            continue;
        }
    }
    return true;
}