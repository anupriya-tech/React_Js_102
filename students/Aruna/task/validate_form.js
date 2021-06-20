function checkvValues() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email + "  " + password);
    var validate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email == '') {
        alert("enter email");
        return;
    }
    else if (email != '' && email != email.match(validate)) {
        alert("Invalid email id");
        return false;
    }
    else if(password == ''){
        alert(" enter aassword");
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
        alert("welcome");
        return ;
    }
}