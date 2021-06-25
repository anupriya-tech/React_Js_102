  const record={
    id:["101","102","103","104"],
    name:["raj","rajesh","suraj","tom"],
    cmarks:[45,65,43,71],
    pmarks:[55,85,55,65],
    mmarks:[67,77,60,70] 
  }
  var res=[];
  for(i=0;i<record.id.length;i++){
    res[i]=record.cmarks[i]+record.pmarks[i]+record.mmarks[i];
    
  }
  var maxscore=Math.max(...res);
  var name_index=res.indexOf(Math.max(...res));
  document.getElementById("percent").innerHTML=`${record.name[name_index]} scored ${(maxscore/300)*100}%`;
