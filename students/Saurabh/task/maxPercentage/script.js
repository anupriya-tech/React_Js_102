class MaxPercentC {
    constructor(){
        this.data = [
            {id:101,name:'raj',cmarks:45,pmarks:55,mmarks:67},
            {id:102,name:'rajesh',cmarks:65,pmarks:85,mmarks:77},
            {id:103,name:'suraj',cmarks:43,pmarks:55,mmarks:60},
            {id:104,name:'tom',cmarks:71,pmarks:65,mmarks:70}
        ]

        this.cMax = this.cMax.bind(this);
        this.Total = this.Total.bind(this)
    }
    Total(){
        let totals = [];
        this.data.forEach(function(val){
            totals.push({id: val.id, name: val.name, marks: (val.cmarks + val.pmarks + val.mmarks)})
        });
        return totals;
    }

    cMax(){
        console.log(this.Total())
        let hasMax = 0, maxMarks = 0, name="";
        this.Total().forEach(function(val){
            if(val.marks > maxMarks){
                hasMax = val.id;
                maxMarks = val.marks;
                name = val.name;
            }
        });
        return "<strong>"+name+"</strong>: <strong>"+hasMax+"</strong> has the maximum id <strong>(i.e. "+maxMarks+")</strong> "
    }

    

}

document.getElementById("result").innerHTML = new MaxPercentC().cMax();