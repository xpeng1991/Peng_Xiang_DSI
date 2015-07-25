/*
 Xiang Peng
 Section 00
 7-18-15
 Day6_WhileLoop
 */




//alert("Testing to see if this works!");

//Initialize a counter variable
var counter = 0;

//While loop with condition
//run as long as the condition is true
while(counter<200)
{
 console.log("The current value is "+counter);
 //Change the value of the counter variable
 counter+=5;
 //MUST change the value of you will loop forever
}

//Do while loop
//This loop will always run atleast one time before checking the condition

//Create counting variable
var i = 20;

do{
 //this code will always run at least once
 console.log("The value of i is "+i);
 i++;
}while(i<10);

console.log(i);