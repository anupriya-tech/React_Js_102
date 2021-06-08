printMe();

function printMe(){
    console.log("hello from function.");
}

var obj = new PrintMeToo();
obj.printMe();

class PrintMeToo{
    printMe(){
        console.log("hello from class.");
    }
}