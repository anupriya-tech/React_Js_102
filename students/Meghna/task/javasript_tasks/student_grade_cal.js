class Student{
  constructor(name, id, lanMarks,engmarks,hinMarks,mMarks,pMarks,bMarks,sMarks) {
    this.name = name;
    this.id = id;
    this.lanMarks = lanMarks;
    this.engmarks = engmarks;
    this.hinMarks = hinMarks;
    this.mMarks = mMarks;
    this.pMarks = pMarks;
    this.bMarks = bMarks;
    this.sMarks = sMarks;
  }

  grade(){
     let total = this.lanMarks+this.engmarks+this.hinMarks+this.mMarks+this.pMarks+this.bMarks+
    this.sMarks;
    let percent = total/600*100
    if(percent >=90 && percent <=100){
      return 'A';
    }else if(percent >=80 && percent <=90){
      return 'B';
    }else if(percent >=70 && percent <=80){
      return 'C';
    }else{
      return 'FAIL'
    }
  }
}

let student1 = new Student("meghana","106",90,90,90,90,45,45,90)
let student2 = new Student("student1","106",80,70,80,70,45,45,90)
let student3 = new Student("student2","106",70,70,80,70,35,35,60)
let student4 = new Student("student3","106",50,40,50,40,35,35,40)

let studentGrade1 = student1.grade();
let studentGrade2 = student2.grade();
let studentGrade3 = student3.grade();
let studentGrade4 = student4.grade();
console.log(studentGrade1,studentGrade2,studentGrade3,studentGrade4)