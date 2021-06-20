var percentageAry = [],maxpercent=0,maxstudentName=""

var data = [
  { id: '101', name: 'raj', cmarks: 45, pmarks: 55, mmarks: 67 },
	{ id: '102', name: 'rajesh', cmarks: 65, pmarks: 85, mmarks: 77 },
	{ id: '103', name: 'suraj', cmarks: 43, pmarks: 55, mmarks: 60 },
	{ id: '104', name: 'tom', cmarks: 71, pmarks: 65, mmarks: 70 }
]

for ( i=0;i<data.length;i++){
    let total = data[i].cmarks +data[i].mmarks+data[i].pmarks;
    let percent = total/300*100;
    percentageAry[i] = percent;
    if(maxpercent < percentageAry[i]){
      maxpercent =  percentageAry[i];
      maxstudentName = data[i].name;
    }
}

console.log(`${maxstudentName} got High marks with percentage Of ${maxpercent}`)


