
var emp=[{id:101,name:'raj'},
	{id:121,name:'rajesh'},
	{id:130,name:'suraj'},
	{id:114,name:'tom'}
     ]
emp.sort(function(a, b) {
    if (a.id !== b.id) {
        return a.id - b.id
    }
    if (a.name === b.name) {
      return 0;
    }
    return a.name > b.name ? 1 : -1;
});

console.log(emp)