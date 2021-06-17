const getResult = ()=>{
    let Math=document.getElementById("Math").value;
    let Phy=document.getElementById("Physics").value;
    let Chem=document.getElementById("Chemistery").value;
    let Bio=document.getElementById("Bio").value;
    total =parseFloat(Math) + parseFloat(Phy) + parseFloat(Chem) + parseFloat(Bio);
    document.getElementById("total").innerHTML=total;
    percentage= ((total*100)/400);
    document.getElementById("Percentage").innerHTML=percentage;
    if(percentage >90 )
    {
        document.getElementById("grade").innerHTML="Grade A";
    }
    else if(percentage > 80)
    {
        document.getElementById("grade").innerHTML="Grade B";
    }
    else if(percentage > 70)
    {
        document.getElementById("grade").innerHTML="Grade C";
    }
    else
    {
        document.getElementById("grade").innerHTML="Fail";
    }
}