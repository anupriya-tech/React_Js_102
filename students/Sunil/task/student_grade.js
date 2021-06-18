function grade(){
var score=document.getElementById("score").value;
console.log(score);
if(score>=90&&score<=100){
  alert("Congratulations!! Your grade is A");
}
else if(score>=80&&score<90){
  alert("Congratulations!! Your grade is B");
}
else if(score>=70&&score<80){
  alert("Keep it up!! Your grade is C");
}
else {
  alert("Sorry You failed");
}
}