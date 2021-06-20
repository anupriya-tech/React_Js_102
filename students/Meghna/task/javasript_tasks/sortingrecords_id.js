var data = [
{id:101,name:"raj"},
{id:121,name:"rajesh"},
{id:130,name:"suraj"},
{id:114,name:"tom"},
]
var idary = [],nameary = [],sortedidary =[],sortednameary = []

data.forEach(sorttingIds)

function sorttingIds(student,index){
  idary.push(student.id);
  nameary.push(student.name);
}

idary = idary.sort();

idary.forEach((id) => {
  for(i = 0;i< data.length;i++){
    if(data[i].id === id){
      sortedidary.push(data[i]) 
    }
  }
})



console.log("sortedidary",sortedidary)