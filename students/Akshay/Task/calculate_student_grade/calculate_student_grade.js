
<script>
  

var msg = 'enter the percentage of student:';
//printing message for user input
var a = prompt(msg);
if(a>89)
    {
      document.write('Grade - A');}
else if(a<=90 && a>89)
    {
      document.write('Grade - A-');}
else if(a>79 && a<=89)
    {
      document.write('Grade - B');}
else if(a>69 && a<=79)
    {
      document.write('Grade - C');}
else if(a<=69)
    {
          document.write('Grade - failed');}
      
</script>
