document.getElementsByName("havePercentage").forEach((rad) => rad.addEventListener('change', function(){

        if(this.value === null || this.value === ""){
            alert("Invalid data!!")
        }else if(this.value !== 'false'){

            document.getElementById('marks').style.display = 'none';
            document.getElementById('percentage').style.display = 'block';

        } else{

            document.getElementById('percentage').style.display = 'none';
            document.getElementById('marks').style.display = 'block';

        }

    })
);

let form = document.getElementById("gradeCalcForm");

form.onsubmit = (e) => {
    e.preventDefault();
    
    let stuName = document.getElementsByName('studentName')[0];
    let formData = new FormData(form);

    if(!validate_form(formData)){

        return false;

    };

    let gradeCalc;

    if(formData.get("havePercentage") === 'true'){

        gradeCalc = new GradeCalc(formData.get("percentage"));

    } else{

        gradeCalc = new GradeCalc((formData.get("obtainedMarks") * 100) / formData.get("maxMarks"));
  
    }
    let grade = gradeCalc.getGrade();

    if(grade === 'fail'){

        document.getElementById('result').innerHTML = "Sorry!!! <strong>"+formData.get("studentName")+"</strong> has Failed the exam."

    } else{

        document.getElementById('result').innerHTML = "Congratulations!!! <strong>"+formData.get("studentName")+"</strong> has passed the exam and secured <strong>"+grade+"</strong>."

    }
}

function validate_form(data){

    const rx_char = /^[a-zA-Z\s]*$/;
    const rx_num = /^[0-9]*$/;
    const havepercent = data.get('havePercentage');

    if(havepercent === null){
        alert('please select appropriate options in have Percentage');
        document.getElementsByName('havePercentage')[0].focus();
        return false;
    }

    
    for(var [name, value] of data.entries()) {

       if(name === "studentName"){

            if(!rx_char.test(value) || value === null || value === ""){
                alert('Please Enter a valid Student\'s Name.');
                document.getElementsByName(name)[0].focus();
                return false;
            }

        } else if(name === 'percentage' && havepercent === "true"){
            
            value = parseInt(value);
            if(!rx_num.test(value) || value > 100 || value < 0){

                alert('Please Enter a valid percemtage i.e. a positive number less than or equal to 100.');
                document.getElementsByName(name)[0].focus();
                return false;

            }

        } else if(name === 'obtainedMarks' && havepercent === "false"){

            value = parseInt(value);
            if(!rx_num.test(value)  || value < 0){

                alert('Please Enter a valid positive Number in Marks Obtained');
                document.getElementsByName(name)[0].focus();
                return false;
            
            }

        } else if(name === "maxMarks" && havepercent === "false"){

            value = parseInt(value);
            if(!rx_num.test(value) || value < 0){

                alert('Please Enter a valid positive Number in Total Marks');
                document.getElementsByName(name)[0].focus();
                return false;

            }

        } else{

            continue;

        }
    }
    return true;
}



class GradeCalc {
    
    constructor(percent){
        this.percent = percent;
        this.getGrade = this.getGrade.bind(this)
    }

    getGrade(){
        if(this.percent > 90){

            return "Grade 'A'"

        } else if(this.percent > 80){

            return "Grade 'B'"

        } else if(this.percent > 70){

            return "Grade 'C'"

        } else{

            return "Fail"

        }
    }
}