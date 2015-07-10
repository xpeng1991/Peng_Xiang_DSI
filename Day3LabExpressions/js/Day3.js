/*
 This is going to be a multi lined comment
 Xiang Peng
 7-9-15
 DSI Section 00
 Day3LabExpressions
 */




// Slice of Pie part 1

// declare and initiation variable;
var slices = 8;
var people = 16;
var pizza = 4;
var slicePerPerson;

//solve the math problem
slicePerPerson = pizza * slices / people;

// show us the result
console.log("Each person ate " + slicePerPerson + " slices of pizza at the party.");

// Slice of Pie part 2

// declare another variable for Sparky
var sparky;

// solve the math problem
sparky = pizza * slices % people;

// show result
console.log("Sparky got " + sparky + " slices of pizza.");


// Average shopping bill

// declare and initiation variables;
var week1 = 32;
var week2 = 43;
var week3 = 123;
var week4 = 89;
var week5 = 67;

// solve math problems
var total = week1 + week2 + week3 + week4 + week5;
var average = (week1 + week2 + week3 + week4 + week5) / 5;

// show result
console.log("You have spent a total of $" + total +
    " on groceries over 5 weeks. That is an average of $" + average + " per week");


// Discounts

// declare and initiation variables
var orgPrice = 199.99;
var disPercent = 0.75;   // 25% off
var item = "Muffler";
var tax = 0.15;  // 15% tax 

// solve math problem
var pTax = orgPrice * disPercent;
pTax = (pTax * tax) + pTax;

var priceNoTax = orgPrice * disPercent;

// return values
console.log("Your " + item + " was originally $" + orgPrice +
    ", but after a 25% discount, it is now $" + priceNoTax +
    " without tax, and $" + pTax + " with tax.")





