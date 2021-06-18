var msg = '99';
//Enter Students Marks
var a = prompt(msg);
if(a>90)
    {
      document.write('Grade - A');
	}
else if(a>=80 && a<=90)
    {
      document.write('Grade - B');
	}
else if(a>=70 && a<=80)
    {
      document.write('Grade - C');
	}
else if( a<70)
    {
      document.write('Failure');
	}