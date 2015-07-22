/*
 Xiang Peng
 Section 00
 7-21-15
 ArrayLoop_worksheet
 */


//alert("Testing to see if this works");



//ArrayLoop
var arr = [0];
var i = 0;

// ask for user's input
do
{
 do
 {
  arr[i] = prompt("Please enter a number from 1 - 100");
 } while (((arr[i] == "" || isNaN(arr[i]) )|| arr[i] > 100 )|| arr[i] < 1);
 i++;
} while (i < 4);

// show user the record
console.log("Array: " + arr);
alert("You entered: " + arr);

// show other results
