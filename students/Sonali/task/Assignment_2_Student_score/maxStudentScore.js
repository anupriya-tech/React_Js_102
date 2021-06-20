var studMarks=[{id:101,name:"raj",cmarks:45,pmarks:55,mmarks:67},
{id:102,name:"rajesh",cmarks:65,pmarks:85,mmarks:77},
{id:103,name:"suraj",cmarks:43,pmarks:55,mmarks:60},
{id:104,name:"tom",cmarks:71,pmarks:65,mmarks:70}];


function studResult(){
var result1=studMarks[0].cmarks+studMarks[0].pmarks+studMarks[0].mmarks/300;
console.log(result1);
var result2=studMarks[1].cmarks+studMarks[1].pmarks+studMarks[1].mmarks/300;
console.log(result2);
var result3=studMarks[2].cmarks+studMarks[2].pmarks+studMarks[2].mmarks/300;
console.log(result3);

if(result1>result2&&result3)
{
      console.log(result1 + "is highest score");
}
else if(result2>result1&&result3){
   console.log(result2 +"is highest score");
}else
{
   console.log(result3+"is highest score");
}

}
studResult();