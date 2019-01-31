/* Q4. The Calculator

Write a function that will take one argument (a number) and perform the following operations:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius. */

"use strict";

function Calculate(number1)
{
    var number2 = number1/2;
    var square = number1^2;
    var area = (22/7) * (number2*number2);
    return("Area of the circle is",area);
}

let Calculation = Calculate(70);

console.log(Calculation);
