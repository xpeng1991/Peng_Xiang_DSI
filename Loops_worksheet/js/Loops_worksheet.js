/*
 Xiang Peng
 Section 00
 7-18-15
 Loops_worksheet
 */


//alert("Testing to see if this works");

// While Loop
// These are simple examples of loops

// user enter a random through 1 to 10
// then there will be popup window that shows the number user entered
// this popup window will show X times depends on users input
if (0) {
 var num = 0;

 do
 {

  num = prompt("Please enter a number between 1 - 10");

 } while ((((num < 1 || num > 10 ) || num === 0 ) || num === "" ) || isNaN(num));

 var x = 0;

 while (x < num) {
  x++;
  alert("you entered number: " + num + "\nThis is [" + x + "] time this shows up.");
 }
}


// Do While Loop

var fruit = ["x"];
var numFruit = 0;
do
{
 numFruit = prompt("How many fruit do you want? (1 - 5)");
} while((((numFruit < 1 || numFruit > 5 )|| numFruit === 0 )|| numFruit === "" )|| isNaN(numFruit));
console.log(numFruit);

var times = 0;
do
{
 do
 {
  fruit[times] = prompt("Which one do you want to eat? (Simple enter the first letter)\n" +
      "[O]Orange\n" +
      "[A]Apple\n" +
      "[G]Grape\n" +
      "[L]Lemon");
 } while (((fruit.toLowerCase() != "o" || fruit.toLowerCase() != "a" )|| fruit.toLowerCase() != "g" )||
     fruit.toLowerCase() != "l");
 times ++;
} while (times <= numFruit);



















// For Loop


