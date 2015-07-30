/*
 Xiang Peng
 Section 00
 7-30-15
 Peng_Xiang_FinalExam
 */


//alert("Testing to see if this works");



// discounted sales price calculator
/////////////////////////////////////
// Prompt the user for the cost of an item
// Validate the prompt is in fact a number and not left blank

var cost = 0;
do
{
    cost = prompt("Please enter the price of an item that you want to calculate: \n" +
        "Please enter numbers ONLY!");
    Number(cost);
} while ((cost == "" || isNaN(cost) )|| cost == 0);

// Prompt the user for a discount % that between 0 to 100
// Validate it is a number, in the range, and not left blank

var discInput = 0;
do
{
    discInput = prompt("Please enter the discount percentage (this should between 0 to 100): \n" +
        "Please enter numbers ONLY!");
    Number(discInput);
} while (((discInput == ""|| isNaN(discInput) )|| discInput < 0 )|| discInput > 100);

// Create a function that calculates the discounted price
// User cost and discount as the parameters

function calcDisc (cost, disc)
{
    var discPrice = cost - (cost * (disc / 100));
    Number(discPrice);
    return discPrice;
}

// function call and catch the return
// display results in a proper way

var finalPrice = calcDisc(cost, discInput);
finalPrice = finalPrice.toFixed(2);

console.log("The final cost of and item that costs $" + cost + " with a discount of " + discInput + "% is $" + finalPrice + ".");
alert("The final cost of and item that costs $" + cost + " with a discount of " + discInput + "% is $" + finalPrice + ".");


//////////////////////////////////////////////////////////
// Test                  Inputs                           Output
//   1                 100,    100                        0
//   2                 100,    0                          100
//   3                 556.7,  25                         417.53







