import sq from "./securityQuestion.js";
import {options} from "./options.js";
// import email from "./bindData.js";


for(var i = 0; i < options.length; i++) 
{
    var opt = options[i];
    //alert(options[i]);
    var el = document.createElement("OPTION");
    el.setAttribute("value", opt);
    var t = document.createTextNode(options[i]);
    el.appendChild(t);
    document.getElementById("inputState").appendChild(el);
}

for(var key in sq)
{
  var getValue = sq[key];
    //alert(key + " = " + getValue );
    var el1 = document.createElement("OPTION");
    el1.setAttribute("value", key);
    var t1 = document.createTextNode(getValue);
    el1.appendChild(t1);
    document.getElementById("inputSecurityQuestion").appendChild(el1);
}



// document.getElementById("inputUserId").value = email;
// document.getElementById("inputPassword").value = "12345678";


document.getElementById("signInbtn").addEventListener("click",setData);

function setData()
{
window.location.assign("welcome.html");
}






