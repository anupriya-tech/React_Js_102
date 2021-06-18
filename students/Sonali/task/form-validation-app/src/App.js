function validateForm(){  
  var email=document.myform.email.value; 
  var psw = document.myform.psw.value;
  console.log("psw---"+psw); 
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    //return false;  
    } 
    if(psw.length <6){
      alert("AtLeast 6 character");
    }
    var upperCaseLetters = /[A-Z]/g;
    if(psw.match(upperCaseLetters)) {  
      //do nothing 
    } else {
      alert("At Least one Upper case ");
    }
  }  
  