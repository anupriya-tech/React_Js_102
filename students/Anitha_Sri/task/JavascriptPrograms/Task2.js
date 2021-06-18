/*WAP to calculate maximum % scored student report from below data.
	{id:101,name:raj,cmarks:45,pmarks:55,mmarks:67}
	{id:102,name:rajesh,cmarks:65,pmarks:85,mmarks:77}
	{id:103,name:suraj,cmarks:43,pmarks:55,mmarks:60}
	{id:104,name:tom,cmarks:71,pmarks:65,mmarks:70}*/

    const data=[{id:101,name:"raj",cmarks:45,pmarks:55,mmarks:67},
	{id:102,name:"rajesh",cmarks:65,pmarks:85,mmarks:77},
	{id:103,name:"suraj",cmarks:43,pmarks:55,mmarks:60},
	{id:104,name:"tom",cmarks:71,pmarks:65,mmarks:70}]
    
    
function CalcPercintile(){
    let marks1=data[0].cmarks+data[0].pmarks+data[0].mmarks/300
    
    console.log(marks1)
    let marks2=data[1].cmarks+data[1].pmarks+data[1].mmarks/300
    console.log(marks2)
   let marks3=data[2].cmarks+data[2].pmarks+data[2].mmarks/300
   console.log(marks3)

   if(marks1>marks2&&marks3){
          console.log(mark1 + "is the highest")
   }else if(marks2>marks1&&marks3){
       console.log(marks2 +"is the highest percentage")
   }else{
       console.log(marks3+"is the highest Percentage")
   }

}
CalcPercintile()
