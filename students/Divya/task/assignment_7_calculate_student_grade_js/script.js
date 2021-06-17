
function calcGrade() {

    let maths = document.getElementById("maths").value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let biology = document.getElementById('biology').value;
    let grade = "";

    let totalMarks = parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(biology);
    let percentage = (totalMarks / 400) * 100;

    if (percentage <= 100 && percentage >= 90) {
        grade = 'A';
        alert("Your grade is " + grade + " \n You cleared the exam" );
    } else if (percentage <= 89 && percentage >= 80) {
        grade = 'B';
        alert("Your grade is " + grade + " \n You cleared the exam" );
    } else if (percentage <= 79 && percentage >= 70) {
        grade = 'C';
        alert("Your grade is " + grade + " \n You cleared the exam" );
    } else {
        grade = 'F';
        alert("Your grade is " + grade + " \n You are Failed in the exam" );
    }
}