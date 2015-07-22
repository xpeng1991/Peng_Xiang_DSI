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
  arr[i] = prompt("Please enter a number:");
 } while (arr[i] == "" || isNaN(arr[i]));
 i++;
} while (i < 9);

