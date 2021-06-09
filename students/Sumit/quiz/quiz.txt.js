/* Quiz-1 
<------ Code Start-------> */
{
var a=21;
var b = function(){
  console.log(a);
  var a=20;

};
b();
//Undefined
//<------ Code End------->

/* Quiz-2 
<------ Code Start-------> */
let x=10;
let y=x%4;
let z=y/2;
let c=x*2;
alert(x);
//<------ Code End------->
//10

/* Quiz-3 
<------ Code Start-------> */
const magic=42;
const theaAnswer=magic;
const everything=new Set([magic,theAnswer]);
console.log(everything.size);
//<------ Code End------->
//1

/* Quiz-4
<------ Code Start-------> */
function rectangle(w,h)
{
  return w*h;
}
const rectangle = function(w,h)
{
return w*h;
} 

const rectangle = (w,h)=>{
return w*h;
};
const rectangle = (w,h)=>w*h;
{
return w*h;
}
//<------ Code End------->
// ///syntax error.
