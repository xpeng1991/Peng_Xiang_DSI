/*
 Xiang Peng
 Section 00
 7-11-15
 Expressions Assignment
 */


//alert("Testing to see if this works");

// tell the user what to do

alert("This is a simple calculator that calculates the average number.\n" +
    "The Maximum number of numbers you may calculate is 5.\n" +
    "Enter numbers you want to calculate\n");

// set an array to store users' input
var arr = [0];

// ask the user to do the input, and store them in the array
arr[0] = prompt("Please enter a number you want to calculate:");
arr[1] = prompt("Please enter another number:");
arr[2] = prompt("Please enter another number:\n" +
    "if no more numbers to be calculated, just simply enter '0' ");
arr[3] = prompt("Please enter another number:\n" +
    "if no more numbers to be calculated, just simply enter '0' ");
arr[4] = prompt("Please enter another number:\n" +
    "if no more numbers to be calculated, just simply enter '0' ");

console.log(arr);

// calculate the average value based on users' input
