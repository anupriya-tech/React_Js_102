var student = {
    name: "John",
    getName: function(){
        console.log("student" + this.name);
    }
}

var employee = {
    name: "Tom",
    getName: function(){
        console.log("employee" + this.name);
    }
}

var run = student.getName.bind(employee);
run();