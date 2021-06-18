<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<script type="text/javascript">
	var stcollection = [
	{ id: '101', name: 'raj', cmarks: 45, pmarks: 55, mmarks: 67 },
	{ id: '102', name: 'rajesh', cmarks: 65, pmarks: 85, mmarks: 77 },
	{ id: '103', name: 'suraj', cmarks: 43, pmarks: 55, mmarks: 60 },
	{ id: '104', name: 'tom', cmarks: 71, pmarks: 65, mmarks: 70 }
]

var tMarks = [];
var total = '';
var j = 0;

for (var i = 0; i <= 3; i++) {

	total = stcollection[i].cmarks + stcollection[i].pmarks + stcollection[i].mmarks;

	console.log(total);

	if (total > tMarks) {
		tMarks = total;

		console.log(tMarks + " high");
		j = i;
	}
	total = tMarks;
	 console.log(total + "  " + j);
}
console.log("the student " + stcollection[j].name + " score high \n" + "The total marks is: " + tMarks);
</script>
</body>
</html>