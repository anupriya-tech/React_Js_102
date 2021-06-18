function sorting() {
  var collection = [
    { id: 101, name: "raj" },
    { id: 121, name: "rajesh" },
    { id: 130, name: "suraj" },
    { id: 114, name: "tom" },
  ];

  function compare_id(a, b) {
    // a should come before b in the sorted order
    if (a.id < b.id) {
      return -1;
      // a should come after b in the sorted order
    } else if (a.id > b.id) {
      return 1;
      // a and b are the same
    } else {
      return 0;
    }
  }

  console.log("Object to be sorted");
  console.log(collection);
  console.log("Sorting based on the ID property");
  console.log(collection.sort(compare_id));
}
sorting();
