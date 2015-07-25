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


//Create a variable for the max value
var max = prompt("What is the maximum value?");
//Validate for max
while((isNaN(max) || max ==="") || max <= min)
{
 if(isNaN(max))
 {
  max = prompt("Please only enter a number value.\nWhat is the maximum value?");
 }
 else if (max <= min && max != "")
 {
  max = prompt("Please enter a number bigger than your minimum value of " + min + ".\nWhat is the maximum value?");
 }
 else
 {
  max = prompt("Please do not leave blank.\nWhat is the maximum value?");
 }
}
//Number cast or parseInt
max = Number(max);


//test to check values of max and min
console.log("The min value is "+min+".\nThe max value is "+max+".");

//Function call the randomizer
var results1 = randomizer(min,max);
console.log("Your random number is "+results1+".");

//15 random numbers to print to the console.log
for(var i = 0 ; i < 15 ; i++)
{
 var tempNum = randomizer(min,max);
 console.log(tempNum);

}


//Create the random function
function randomizer(mn,mx)
{
 //Generate our random number
 var randomNum = Math.round(Math.random()*(mx-mn)+mn);
 //console.log(randomNum);

 return randomNum;
}










