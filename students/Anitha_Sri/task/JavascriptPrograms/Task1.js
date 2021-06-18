/*WAP to calculate student grade based on below rules
a. 90 to 100 -> Grade A
	b. 80 to 90 -> Grade B
	c. 70 to 80 -> Grade C
	d. Failure.*/

    const grade=88
switch(true){
case grade>=90:
    console.log('A')
break;
case grade>=80:
    console.log('B')
 break;
 
case grade>=70:
console.log('C')
break;

default:
console.log('Failed')

}
