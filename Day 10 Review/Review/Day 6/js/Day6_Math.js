/*
 Xiang Peng
 Section 00
 7-18-15
 Math
 */


//alert("Testing to see if this works!");

//round() - normal rounding .5 + goes up .4999 - goes down

//Does not permanently change the variable value


 //To change the variable assign it to the variable name
    var num1 = 9.744;
num1 = Math.round(num1);
console.log(num1);
console.log(Math.round(num1));
console.log(num1);

//floor() - rounds down the the nearest integer
var num2 = 6.8;
num2 = Math.floor(num2);
console.log(num2);
console.log(Math.floor(num2));


//ceil() - rounds up to the nearest int
var num3 = 4.8;
num3 = Math.ceil(num3);
console.log(num3);
console.log(Math.ceil(num3));

//random() - returns a number between 0 and almost 1
var num4 = Math.random();
console.log(num4);

//Number between 0 and 10
var num5 = Math.random()*10;
console.log(num5);

//Number between two other numbers NOT zero
//Math.random() * (max-min) + min

//number between 50 and 80
var num6 = Math.random() * (80-50) + 50;
console.log(num6);

//an INTEGER between 100- 1000
var num7 = Math.round(Math.random() * (1000-100) + 100);
console.log(num7);


//.toFixed(x) - Round to a decimal place - x = decimal
var num8 = Math.random();
num8 = num8.toFixed(2);
console.log(num8);
console.log(num8.toFixed(2));

//Math Contestants
//Pi - 3.14
//Math.PI
console.log(Math.PI.toFixed(5));

//Circumference of a circle
//2*r*pi
var radius = 7;
var circleCumfre = 2*radius*Math.PI;
console.log(circleCumfre);




