/* Q2. Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN". */

"use strict";

var radius = 5;
var circum = 2 * (22/7) * radius;
var area = (22/7) * (radius^2);

console.log("The circumference is ", circum);
console.log("The area is ", area);
