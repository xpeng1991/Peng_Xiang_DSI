/*
 Xiang Peng
 Section 00
 7-25-15
 anonymous
 */


//alert("Testing to see if this works");


//Basic Anonymous Function
// var functionName = function(){};

//Extremely popular in JS & Jquery
//Important in Object Oriented Programming
//For now, it is matter style choice between anon and regular functions.

//Test function call - WILL NOT WORK!!!
//var results2 = triArea(5,10);
//console.log(results2);

//Create an anon function to calculate the area of a triangle
var triArea = function(b,h){
 var area = .5*b*h;
 return area;
};

//Function call for anon function
//MUST BE AFTER THE DEFINITION!
var results = triArea(10,20);

console.log(results);

