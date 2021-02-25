(function() {
    "use strict"
//Extra Loops Work
//Exercise 1. Write a JavaScript program that accepts two integers and displays the larger.

    var input1;
    var input2;

    input1 = prompt("Enter the first number.");
    input2 = prompt("Enter the second number.");

    if (parseInt(input1) > parseInt(input2)) {
        console.log("The first number " + input1 + " is greater.");
    } else if (parseInt(input2) > parseInt(input1)) {
        console.log("The second number " + input2 + " is greater.");
    } else {
        console.log("The first number " + input1 + " and the second number " + input2 + " are equal.");
    }


// 2. Write a JavaScript conditional statement to find the sign of product of three numbers.
//     Display an alert box with the specified sign.


    var a = Number(prompt("Enter the first number."));
    var b = Number(prompt("Enter the second number"));
    var c = Number(prompt("Enter the third number"));
    var sum = a + b + c;
    if (sum < 0) {
        alert("The sign is - ");
    } else {
        alert("The sign is + ");
    }

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.


    var x = Number(prompt("Enter the first number."));
    var y = Number(prompt("Enter the second number."));
    var z = Number(prompt("Enter the third number."));

    if ((x > y) && (y > z)) {
        console.log(x + "," + y + "," + z);
        alert(x + "," + y + "," + z);
    } else if ((x > z) && (z > y)) {
        console.log(x + "," + z + "," + y);
        alert(x + "," + z + "," + y);
    } else if ((y > x) && (x > z)) {
        console.log(y + "," + x + "," + z);
        alert(y + "," + x + "," + z);
    } else if ((y > z) && (z > x)) {
        console.log(y + "," + z + "," + x);
        alert(y + "," + z + "," + x);
    } else if ((z > x) && (x > y)) {
        console.log(z + "," + x + "," + y);
        alert(z + "," + x + "," + y);
    } else if ((z > y) && (y > x)) {
        console.log(z + "," + y + "," + x);
        alert(z + "," + y + "," + x);
    } else (console.log("Combination not accounted for."));


// 4. Write a JavaScript conditional statement to find the largest of five numbers.
//     Display an alert box to show the result.


    var i = 0;
    var largerNumber = new Array(5);
    while (i < 5) {
        largerNumber[i] = parseInt(prompt("Enter a number."));
        console.log(largerNumber[i]);
        i++
    }

    //To sort from lowest to higest on an array of numbers. The
    //function keeps the .sort method from comparing the numbers as a string.
    // var numbers = [4, 2, 5, 1, 3];
    // numbers.sort(function(a, b) {
    //     return a - b;
    // });
    // console.log(numbers);
    // [1, 2, 3, 4, 5]


    var a = largerNumber[0];
    var b = largerNumber[1];
    var c = largerNumber[2];
    var d = largerNumber[3];
    var e = largerNumber[4];

    if (a > b && a > c && a > d && a > e) {
        alert("The largest number is " + a + ".");
    } else if (b > a && b > c && b > d && b > e) {
        alert("The largest number is " + b + ".");
    } else if (c > a && c > b && c > d && c > e) {
        alert("The largest number is " + c + ".");
    } else if (d > a && d > b && d > c && d > e) {
        alert("The largest number is " + d + ".");
    } else {
        alert("The largest number is " + e + ".");
    }

//5. Write a JavaScript for loop that will iterate from 0 to 15.
//  For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.

    for (i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even.");
        } else {
            console.log(i + " is odd.");
        }
    }

//6. Write a JavaScript program which compute, the average marks
//of the following students Then, this average is used to determine
//the corresponding grade.
    var grade;
    var numToDivide = 0;
    var gradeToAdd = 0;
    var average;
    var moreGrades = confirm("Do you want to enter a grade?");
    while (moreGrades === true) {
        grade = Number(prompt("Enter a grade."));
        numToDivide = numToDivide + 1;
        gradeToAdd = gradeToAdd + grade;
        moreGrades = confirm("Do you want to enter another grade?");
    }

// in their solution they used a an array within an aray and a for loop.
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
//
// var Avgmarks = 0;
//
// for (var i=0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks/students.length);
// }


    average = gradeToAdd / numToDivide;
    console.log(gradeToAdd);
    console.log(numToDivide);
    alert("Average = " + average);
//This last part we did the same.
    if (average < 60) {
        console.log("The average grade is F.");
        alert("The average grade is F");
    } else if (average < 70) {
        console.log("The average grade is D.");
        alert("The average grade is D");
    } else if (average < 80) {
        console.log("The average grade is C.");
        alert("The average grade is C");
    } else if (average < 90) {
        console.log("The average grade is B.");
        alert("The average grade is B");
    } else if (average < 100) {
        console.log("The average grade is A.");
        alert("The average grade is A");
    } else {
        console.log("The students have no average grade.");
        alert("The students have no average grade");
    }

//7. Write a JavaScript program which iterates the integers from 1 to 100.
//But for multiples of three print "Fizz" instead of the number and for the multiples of five
//print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
})();

