/*
 Xiang Peng
 Section 00
 7-23-15
 Functions_worksheet
 */


//alert("Testing to see if this works");




// Circumference
// create function
function cirCalc(rad)
{
 return (rad * 3.14 * 2);
}

// get a simple number and call the function
var num = prompt("enter a number: ");

// show the result
var result1 = cirCalc(num);
console.log("The circumference of the circle is " + result1);



// Stung!
// create function
function beeString(w)
{
 return w * 8.666666667;
}

// get weight
var weight = prompt("enter a weight: ");

// show the result
var result2 = beeString(weight);
console.log("It takes " + result2 + " bee stings to kill this animal.");

