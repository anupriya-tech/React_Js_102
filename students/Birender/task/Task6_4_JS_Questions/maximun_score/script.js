var collection = [
	{ id: '101', name: 'raj', cmarks: 45, pmarks: 55, mmarks: 67 },
	{ id: '102', name: 'rajesh', cmarks: 65, pmarks: 85, mmarks: 77 },
	{ id: '103', name: 'suraj', cmarks: 43, pmarks: 55, mmarks: 60 },
	{ id: '104', name: 'tom', cmarks: 71, pmarks: 65, mmarks: 70 }
]

var totalMarks = [];
var total = '';
var j = 0;

for (var i = 0; i <= 3; i++) {

	total = collection[i].cmarks + collection[i].pmarks + collection[i].mmarks;

	console.log(total);

	if (total > totalMarks) {
		totalMarks = total;

		console.log(totalMarks + " high");
		j = i;
	}
	total = totalMarks;
	 console.log(total + "  " + j);
}
console.log("the student " + collection[j].name + " score high \n" + "The total mark is: " + totalMarks);