students = [{ id: 101, name: 'raj' },
{ id: 121, name: 'rajesh' },
{ id: 130, name: 'suraj' },
{ id: 114, name: 'tom' }]

students.sort(function(a, b){
    return a.id - b.id || a.id.localCompare(b.id)

});
console.log(students);
