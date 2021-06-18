<script>
// Javascript program to find the
// list of students having maximum average score

// Function to find the
// list of students having maximum average score

function getStudentsList(file, n)
{

	// Variables to store average score of a student
	// and maximum average score
	let avgScore;
	let maxAvgScore = Number.MIN_SAFE_INTEGER;

	// List to store names of students
	// having maximum average score
	let names = [];

	// Traversing the file data
	for (let i = 0; i < n; i += 4)
	{

		// finding average score of a student
		avgScore = Math.floor((Number(file[i + 1]) + Number(file[i + 2]) + Number(file[i + 3])) / 3);

		if (avgScore > maxAvgScore)
		{
			maxAvgScore = avgScore;

			// Clear the list and add name of student
			// having current maximum average score in the list
			names = [];
			names.push(file[i]);
		}

		else if (avgScore == maxAvgScore)
			names.push(file[i]);
	}

	// Printing the maximum average score and names
	// of students having this maximum average score
	// as per the order in the file.
	for (let i = 0; i < names.length; i++) {
		document.write(names[i] + " ");
	}

	document.write(maxAvgScore);
}

// Driver code

let file = ["Raj", "45", "55",
	"67", "Rajesh", "65", "85", "77","Suraj","43","55","60","tom","71","65","70"];

// Number of elements in string array			
let n = file.length;

getStudentsList(file, n);



</script>
