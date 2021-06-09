const magic = 42
const theAnswer = 42
const everything = new Set([magic , theAnswer])
console.log(everything.size)

/* output become 1 because 
in this example we have created Sets and we have added two elements but which having same value
as  sets doesn't contain duplicates values so it will have only one value that is 42* so 
size of Sets become 1
*/ 