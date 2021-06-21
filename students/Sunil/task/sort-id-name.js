
  const record={
    id:[101,121,130,114],
   name:["raj","rajesh","suraj","tom"]
  }
   
    var i,j;  
    for(i=0;i<record.id.length-1;i++){
      for(j=0;j<record.id.length-1;j++){
      console.log(i);
    if(record.id[j]<record.id[j+1] ){
     // console.log(record.id);
    continue;   
    }
    else{
      var temp = record.id[j];
      var name=record.name[j];
      record.id[j]=record.id[j+1];
      record.name[j]=record.name[j+1];
      record.id[j+1]=temp;
      record.name[j+1]=name;   
      console.log(record.id);
      console.log(record.name);
       }      
     }
    }