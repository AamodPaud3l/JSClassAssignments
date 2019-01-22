/* Q5. Given the percentage of a student, find out the division of that student. Conditions:

Distinction if 100 > percentage >= 80
First Division if 80 > percentage >= 60
Second Division if 60 > percentage >= 40
Third Division if 40 > percentage >= 32
Else fail */

"use strict";

let percentage = 70;

if(100 > percentage && percentage >= 80){
    console.log("Distinction");
}
else if(80 > percentage && percentage >= 60){
    console.log("First Division");
}

else if(60 > percentage && percentage >= 40){
    console.log("Second Division");
}

else if(40 > percentage && percentage >= 32){
    console.log("Third Division");
}

else{
    console.log("Fail");
}