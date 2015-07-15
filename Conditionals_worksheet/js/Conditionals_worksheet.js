/*
 Xiang Peng
 Section 00
 7-14-15
 Conditionals_worksheet
 */


//alert("Testing to see if this works");


//// Celsius to Fahrenheit converter

// ask the user for temperature
var number = prompt("Please enter the temperature you want to convert: ");
console.log(number);

// ask the user which one wants to convert
var ForC = prompt("Please enter which one you want to convert to.\n" +
    "Enter 'F' or 'C' ;");
console.log(ForC);

// store the temperature
var temp = 0;


// C to F
if (ForC === 'F' || ForC === 'f')
{
 temp = (number - 32) * (5 / 9);
 alert("The temperature is " + temp + " degrees Fahrenheit");
}

// F to C
if (ForC === 'C' || ForC === 'c')
{
 temp = number * (9 / 5) + 32;
 alert("The temperature is " + temp + " degrees Celsius.");
}