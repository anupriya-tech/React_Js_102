var items = [
  {
      "id": 101,
      "name": "raj"
  },
  {
      "id": 121,
      "name": "rajesh"
  },
  {
      "id": 130,
      "name": "suraj"
  },
  {
      "id": 114,
      "name": "tom"
  }
];

items.sort(function(a, b) {
  return (a.id - b.id);
}).sort(function(a, b) {
  return (a.name - b.name);
});

console.log(items);
