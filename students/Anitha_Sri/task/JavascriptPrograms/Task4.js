 /*
WAP to perform sorting of below data based on id and name
	{id:101,name:raj}
	{id:121,name:rajesh}
	{id:130,name:suraj}
	{id:114,name:tom}*/

    const data=[{id:101,name:"raj"},
	{id:121,name:"rajesh"},
	{id:130,name:"suraj"},
	{id:114,name:"tom"},
]

  function CompareId(a,b){
      
      if(a.id<b.id){
          return-1
      }else if(a.id>b.id){
          return 1
      }else{
          return 0
      }

}

function compareName(a,b){
    if(a.name<b.name){
        return -1
    }else if(a.name > b.name){
        return 1
    }else{
        return 0
    }

}
  
console.log(data.sort(CompareId))
console.log(data.sort(compareName))