class MaxPercentCalc {
    constructor(){
        this.data = [
            {id:101,name:'raj',cmarks:45,pmarks:55,mmarks:67},
            {id:102,name:'rajesh',cmarks:65,pmarks:85,mmarks:77},
            {id:103,name:'suraj',cmarks:43,pmarks:55,mmarks:60},
            {id:104,name:'tom',cmarks:71,pmarks:65,mmarks:70}
        ]

        this.calcMax = this.calcMax.bind(this);
        this.getTotals = this.getTotals.bind(this)
    }
    getTotals(){
        let totals = [];
        this.data.forEach(function(val){
            totals.push({id: val.id, name: val.name, marks: (val.cmarks + val.pmarks + val.mmarks)})
        });
        return totals;
    }

    calcMax(){
        console.log(this.getTotals())
        let hasMax = 0, maxMarks = 0, name="";
        this.getTotals().forEach(function(val){
            if(val.marks > maxMarks){
                hasMax = val.id;
                maxMarks = val.marks;
                name = val.name;
            }
        });
        return "<strong>"+name+"</strong> with ID: <strong>"+hasMax+"</strong> has secured the Maximum Marks<strong>(i.e. "+maxMarks+")</strong> among all."
    }

    

}

document.getElementById("result").innerHTML = new MaxPercentCalc().calcMax();