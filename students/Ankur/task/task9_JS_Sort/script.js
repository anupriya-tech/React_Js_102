class SortingData {
    constructor(){
        this.data = [
            {id:101,name:'raj'},
            {id:130,name:'suraj'},
            {id:121,name:'rajesh'},
            {id:114,name:'tom'}
        ]

        this.sortByName = this.sortByName.bind(this);
        this.sortByID = this.sortByID.bind(this)
    }
    sortByID(){
        return this.data.sort((v1,v2) => v1.id-v2.id )
    }

    sortByName(){
        return this.data.sort(function (v1,v2){
            if(v1.name > v2.name){
              
                return 1;

            } else if(v1.name < v2.name){
                
                return -1;

            } else{
                
                return 0;

            }
        } )
    }

    

}

let sd_Obj = new SortingData();
// document.getElementById("result").innerHTML = 
console.log(sd_Obj.sortByID());
console.log(sd_Obj.sortByName());