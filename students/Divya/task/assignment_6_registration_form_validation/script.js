function validate() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email + "  " + password);
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email == '') {
        alert("Email Required !");
        return;
    }
    else if (email != '' && email != email.match(validEmail)) {
        alert("Invalid email address!");
        return false;
    }
    else if(password == ''){
        alert("Password Required");
        return;
    }
    else if(password != '' && password.length <= 6)
    {
        alert("Password length should be grater than 6");
    }
    else if(password != '' && password.length <= 6 && password != (/[A-Z]/.test(password))){
        alert("Password should contain one Capital letter");
        return false; 
    } 
    else{
        alert("...Thanks for the registration... \n" + "EMAIL:  "+ email + "\nPASSWORD: " + password);
        return ;
    }
}