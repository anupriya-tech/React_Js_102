
Quiz_1 :
function aaa()
{
    return
    {
        test : 1
    };
}
alert(typeof aaa())

        /* output :  undefined* because
        return statement will not return anything as curely opening brace '{' we have taken
        on next line.. so after return statement even we have not given ; JS will 
        add newline character so return is single statement which is not returning anything 

        */


Quiz_2 :

document.getElementById("title");  // get the HTML element with specific ID

[or]

$("#title") // return a jQuery object


        /*
        The getElementById() method returns the element that has the ID attribute 
        with the specified value.
        Returns null if no elements with the specified ID exists.
        if more than one element with the specified ID exists, the getElementById()
        method returns the first element in the source code.
        and its faster than JQuery ID selector because its directly give call to JS Engine.

        If an element with that id is not existing on the page $("#id")
        will not work and the script will stop document.getElementById("id") will return null
        */

Quiz_3 :

(10).toString() 
(10).toString(2) //1010

        /* toString will return binaray value as it takes 2 as argument
        for 8 - it will return octal value 
        for 16 -it will return hexadecimal value */


Quiz_4 :

const times = ["Morning","Afternoon", "Evening"]
times.map(t=>'Good ${t}!')
.forEach(s => console.log(s))



        /* output is 
        Good ${t}!
        Good ${t}!
        Good ${t}!

        The map() method  creates an array by calling a specific function on each element
        present in the parent array 
        map function will traverse every element in array 
        here it will fgives[['Good ${t}!','Good ${t}!','Good ${t}!']
        foreach will take one by one element and will print.
        */

Quiz_5

const apple = 3;
const basket ={
    apple : 2,
    bag :{
        apple : 1,
        plastic : function(){
            return this.apple;
        }
    }
}
const plastic = basket.bag.plastic;
console.log(plastic());
console.log(basket.bag.plastic());


        /* output is undefined and  1
        here we have implemented nested objects concept.
        so when we called plastic function directly it will gives undefined but nested objects 
        we can called like outer obj.inner obj. property
        so basket.bag.plastic() will gives 1 value.
        */

Quiz_6 :

const int =26;
const hex =0x1A;
const octal =0o32;
const binary = 0b11010;
console.log((0b11010 | 0b00001) ===0b11011)

        /* output is true  */


