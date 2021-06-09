
x = 10;

function foo(x){
   x=20;
   delete x;
   return x;
}

console.log(foo(5));

