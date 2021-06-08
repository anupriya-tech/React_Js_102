var a=21
var b=function()
{   
    console.log(a);
    var a=20;
}
b()

/* output is undefined brcause firstly varible 'a' which is declared outside the 
function ,has global scope . But again we are redeclaring same variable inside function so it will block socpe of 
global varaible.
we have initilised value of 'a' inside function  but after console.log() statements  thats why it's printing undefined */