function checkvalidation(str){
  
   var pwd=new RegExp("[a-zA-Z0-9]{6}");
  var re = new RegExp("[A-Z]+");
  if(re.test(str)&& pwd.test(str))
    return true;
  else 
    return false;
  
}

function emailvalidation(email){
  var r=new RegExp("[a-zA-Z][a-zA-Z0-9-.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+");
  if(r.test(email))
    return true;
  else
    return false;
}


