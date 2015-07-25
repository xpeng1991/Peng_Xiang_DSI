/*
 Xiang Peng
 Section 00
 7-25-15
 random
 */


//alert("Testing to see if this works");



// a function takes max and min and then return a random number between them


//Create a variable for the min value
var min = prompt("We are going to find a random number between 2 values.\nWhat is the minimum value?");
//Validate for min
while(isNaN(min) || min ==="")
{
 if(isNaN(min))
 {
  min = prompt("Please only enter a number value.\nWhat is the minimum value?");
 }
 else
 {
  min = prompt("Please do not leave blank.\nWhat is the minimum value?");
 }
}
//Number cast or parseInt
min = Number(min);



