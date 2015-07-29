/*
 Xiang Peng
 Section 00
 7-11-15
 Casting variables
 */


//alert("Testing to see if this works");

// Casting variables means treating one variable like another
var stringVar = "6";
var results = 7 + stringVar;
console.log(results);

// Number() - treats what is inside of the parenthesis like a number if possible
var castingResults = 7 + Number(stringVar);
console.log(castingResults);

// String() - cast numbers as string
var areaCode = 487;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
console.log(phoneNumber);


// all prompt() returns text strings
do
{
 var vGC = prompt("how many games do u have?");
} while ( vGC == "" || isNaN(vGC));

do
{
 var gB = prompt("how many game did u buy today?");
} while (gB == "" || isNaN(gB));

var tG =  Number(vGC) + Number(gB);
console.log(tG);


// ParseInt - look through the string and returns the first integer
// The text string MUST be starts with a NUMBER
// Space are not counted
// Returns NaN if cannot convert it

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("I am 40 years old");  // not working
console.log(b);

var c = Number("40 years");  // not working
console.log(c);

var d = parseFloat("5.67 years");
console.log(d);








