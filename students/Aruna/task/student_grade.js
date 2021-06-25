function studentGrade(p){
    let x;
    for(x=90; x<=100; x++){
      if(p==x){
        console.log("Student Grade: 'A' ");
      }
    }
    for(x=80; x<90; x++){
      if(p==x){
        console.log("Student Grade: 'B' ");
        }
       }
    
    for(x=70; x<80; x++){
      if(p==x){
        console.log("Student Grade: 'C' ");
      }
    }
    if(p<70){
      console.log("Student failed");
     }
    }
    studentGrade(50);