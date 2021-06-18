var items = [
{
 "id": 101,
 "name": "Raj"},
{
 "id": 121,
 "name": "Rajesh"},
{
 "id": 130 ,
 "name": "Suraj"},
{
 "id": 114,
 "name": "Tom"},

];

function dynamicSort(property) {
   return function(a, b) {
       return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
   }
}

items.sort(dynamicSort('name')).sort(dynamicSort('id'));
console.log(items);
items.sort(dynamicSort('id')).sort(dynamicSort('name')); 
console.log(items);  
