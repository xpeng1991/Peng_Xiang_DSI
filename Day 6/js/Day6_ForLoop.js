/*
 Xiang Peng
 Section 00
 7-18-15
 Day6_ForLoop
 */


//alert("Testing to see if this works");




//Basic for loop
//for(initialize counter; condition ; increment of change)

for(var i = 10; i>0 ; i--)
{
 console.log(i);
}


//Breaks - if this command is run, your loop will stop
for(var j = 0; j < 5; j++)
{
 console.log(j);

 //If the value of j is 3 stop my loop
 if(j===3)
 {
  break;
 }
}