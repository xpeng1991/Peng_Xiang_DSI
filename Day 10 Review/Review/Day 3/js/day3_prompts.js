/*
 Xiang Peng
 Section 00
 7-11-15
 Prompts
 */


//alert("Testing to see if this works");


// ask user for information
// input
do
{
    var userInput = prompt("Enter your year of birth:");
} while (((userInput == "" || isNaN(userInput) )|| userInput < 0 )|| userInput > 2015);
console.log(userInput);

var age = 2015 - userInput;
console.log(age);


// calculate the area of a rectangle

// prompt the user for width
do
{
    var width = prompt("Let's calculate the area of a rectangle.\n" +
        "Please enter a width");
} while (width == "" || isNaN(width));
// prompt the user for height
do
{
    var height = prompt("Please enter a height");
} while (height == "" || isNaN(height));

// calculate the area using the user input
var area = width * height;
console.log(area);


// create a variable that holds the whole result
var result = "The area of your rectangle is " + area;
console.log(result);
alert("The area of your rectangle is " + area);