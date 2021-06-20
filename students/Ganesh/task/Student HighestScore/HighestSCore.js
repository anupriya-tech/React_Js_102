let highScore = () => {
    Students = [{ id: 101, name: 'raj', cmarks: 45, pmarks: 55, mmarks: 67 },
    { id: 102, name: 'rajesh', cmarks: 65, pmarks: 85, mmarks: 77 },
    { id: 103, name: 'suraj', cmarks: 43, pmarks: 55, mmarks: 60 },
    { id: 104, name: 'tom', cmarks: 71, pmarks: 65, mmarks: 00 }]

    let highScore =0;
    let total;
    let percentage =0;
    let flag;
    for (let i = 0; i < Students.length; i++) {
        total=0;
        total+=Students[i].cmarks+Students[i].pmarks+Students[i].mmarks;
        percentage=((total*100)/300);
        console.log(percentage);
        if(highScore<percentage){
            highScore=percentage
            flag=i;
        }
    }
    console.log(`${Students[flag].name} scored high score ${percentage} `)
}
highScore();