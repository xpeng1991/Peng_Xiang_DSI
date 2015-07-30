/*
 Xiang Peng
 Section 00
 7-23-15
 Day8_Function
 */


//alert("Testing to see if this works");


// Basic function structure
// function functionName()

// create a function that will console.log something

function printHello()
{
 // this code will run when function runs
 console.log("This function is working!")
}

// create a function call that will start printHello
printHello();



// create a function that console.log a different string
function printMore()
{
 console.log("This is different text.");
}

// function call
printMore();


// function calculates the area of a rectangle
function calcArea()
{
 // calculate and console.log
 console.log("print");
}



// variable scope
// variables that are inside and outside of a function


// create a variable called width in main code
var width = 5;


// arguments and parameters
// return a value
function calArea(w, h)
{
 return w * h;

}

var result = calArea(5, 10);
console.log(result);
































