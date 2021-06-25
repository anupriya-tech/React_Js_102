function checkvValues() {
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('password').value;
    console.log(email + "  " + password);
    var validate = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;

    if (email == '') {
        alert("Please enter valid email");
        return;
    }
    else if (email != '' && email != email.match(validate)) {
        alert("Invalid email id");
        return false;
    }
    else if(pwd== ''){
        alert("Please enter Password");
        return;
    }
    else if(pwd != '' && pwd.length <= 6)
    {
        alert("Password length should be grater than 6");
    }
    else if(pwd != '' && pwd.length <= 6 && pwd != (/[A-Z]/.test(pwd))){
        alert("Password should contain one Capital letter");
        return false; 
    } 
    else{
        alert("Succussfully LoggedIn");
        return ;
    }
}