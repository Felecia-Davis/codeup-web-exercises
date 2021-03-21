// (function() {
    "use strict"
    // Exercise 11
    // Write a function definition for a function named addOne that takes in a number and returns that number plus one

    function addOne(x) {
        x = x + 1;
        return x;
    }

    addOne();

    // Exercise 12
    // Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
    function isPositive(theTrueorFalse) {

        if (theTrueorFalse > 0) {
            return true;
        } else {
            return false;
        }
    }

    isPositive();

    // Exercise 13
    // Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

    function isNegative(i) {

        if (i <= 0) {
            return true;
        } else {
            return false;
        }
    }

    isNegative();

    // Exercise 14
    // Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

    function isOdd(oddNum) {
        if (oddNum % 2 !== 0) {
            return true;
        } else {
            return false;
        }
    }

    isOdd();

    // Exercise 15
    // Write a function definition named isEven that takes in a number and returns true or false if that number is even.

    function isEven(evenNum) {
        if (evenNum % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    isEven();

    // Exercise 16
    // Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

    function identity(anyInput) {
        return anyInput;
    }

    identity();

    // Exercise 17
    // Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

    function isPositiveOdd(posOddNumber) {
        if (posOddNumber > 0 && posOddNumber % 2 !== 0) {
            return true;
        } else {
            return false;
        }
    }

    isPositiveOdd();

    // Exercise 18
    // Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

    function isPositiveEven(posEvenNum) {
        if (posEvenNum > 0 && posEvenNum % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    isPositiveEven();

    // Exercise 19
    // Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

    function isNegativeOdd(negOddNum) {
        if (negOddNum < 0 && negOddNum % 2 !== 0) {
            return true;
        } else {
            return false;
        }
    }

    isNegativeOdd();

    // Exercise 20
    // Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

    function isNegativeEven(negEvenNum) {
        if (negEvenNum < 0 && negEvenNum % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    isNegativeEven();


    // Exercise 21
    // Write a function definition named half that takes in a number and returns half the provided number.

    function half(halfNumber) {
        halfNumber = halfNumber / 2;
        return halfNumber;
    }

    half();

    // Exercise 22
    // Write a function definition named double that takes in a number and returns double the provided number.

    function double(doubleNumber) {
        doubleNumber = doubleNumber * 2;
        return doubleNumber;
    }

    double();

    // Exercise 23
    // Write a function definition named triple that takes in a number and returns triple the provided number.

    function triple(tripleNumber) {
        tripleNumber = tripleNumber * 3;
        return tripleNumber;
    }

    triple();

    // Exercise 24
    // Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.

    function reverseSign(reverseNum) {
        reverseNum = reverseNum * -1;
        return reverseNum;
    }

    reverseSign();

    // Exercise 25
    // Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number

    function absoluteValue(absNum) {
        absNum = Math.abs(absNum);
        return absNum;
    }

    absoluteValue();

    // Exercise 26
    // Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.

    function isMultipleOfThree(numdivthree) {
        if (numdivthree % 3 === 0) {
            return true;
        } else {
            return false;
        }
    }

    isMultipleOfThree();

    // Exercise 27
    // Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.

    function isMultipleOfFive(numdivfive) {
        if (numdivfive % 5 === 0) {
            return true;
        } else {
            return false;
        }
    }

    isMultipleOfFive();

    // Exercise 28
    // Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

    function isMultipleOfBothThreeAndFive(numdivthreefive) {
        if (numdivthreefive % 3 === 0 && numdivthreefive % 5 === 0) {
            return true;
        } else {
            return false;
        }
    }

    isMultipleOfBothThreeAndFive();

    // Exercise 29
    // Write a function definition named square that takes in a number and returns the number times itself.

    function square(numSquare) {
        var numSquare = numSquare * numSquare;
        return numSquare;
    }

    square();

    // Exercise 30
    // Write a function definition named add that takes in two numbers and returns the sum.

    function add (firstNum, secondNum) {
        var sumNum = firstNum + secondNum;
        return sumNum;
    }

    add();

    // Exercise 31
    // Write a function definition named cube that takes in a number and returns the number times itself, times itself.

    function cube(numCube) {
        var numCube = numCube * numCube * numCube;
        return numCube;
    }

    cube();

    // Exercise 32
    // Write a function definition named squareRoot that takes in a number and returns the square root of the provided number

    function squareRoot(numSqr) {
        var numSqr = Math.sqrt(numSqr);
        return numSqr;
    }
    squareRoot();

    // Exercise 33
    // Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.

    function subtract(firstSubtract, secondSubtract) {
        var numSubtract = firstSubtract - secondSubtract;
        return numSubtract;
    }
    subtract();

    // Exercise 34
    // Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

    function multiply(firstmultiply, secondmultiply) {
    var nummultiply= firstmultiply * secondmultiply;
    return nummultiply;
    }
    multiply();

    // Exercise 35
    // Write a function definition named divide that takes in two numbers and returns the first argument divided by the
    // second argument.

    function divide(firstdivide, seconddivide) {
    var numdivide= firstdivide / seconddivide;
    return numdivide;
}
    divide();

    // Exercise 36
    // Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

    function quotient(numquotient1, numquotient2) {
    var numquotient = (numquotient1 - (numquotient1 % numquotient2))/numquotient2
    return numquotient;
}
    quotient();

// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
    function remainder(numremainder1, numremainder2) {
    var numremainder = numremainder1 % numremainder2;
    return numremainder;
}
    remainder();


// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

    function sumOfSquares(num1Squares, num2Squares) {
        var num1Squares = num1Squares * num1Squares;
        var num2Squares = num2Squares * num2Squares;
        var sumSquares = num1Squares + num2Squares;
        return sumSquares;
    }

    sumOfSquares();
// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.

    function timesTwoPlusThree(numtimesTwoPlusThree) {
    numtimesTwoPlusThree = (numtimesTwoPlusThree * 2) + 3;
    return numtimesTwoPlusThree;
}
    timesTwoPlusThree();

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.

    function areaOfRectangle(num1AOR, num2AOR) {
    var numAOR = num1AOR * num2AOR
    return numAOR;
}
    areaOfRectangle();

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle

    function areaOfCircle(numAreaOfCirc) {
    numAreaOfCirc = numAreaOfCirc * numAreaOfCirc * Math.PI;
    return numAreaOfCirc;
}

    areaOfCircle();

// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.

    function circumference(numcircum) {
    numcircum = 2 * numcircum * Math.PI;
    return numcircum;
}

    circumference();

// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

    function isVowel(vowel){
    if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" || vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U") {
        return true;
    }else {return false;}
}
    isVowel();
// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.

    function hasVowels(string){
    var strLow = string.toLowerCase();
    var counter = 0;
    for (var n = 0; n < strLow.length; n++){
        if(strLow[n] === "a" || strLow[n] ==="e" || strLow[n] === "i" || strLow[n] === "o" ||  strLow[n]=== "u") {
            counter++;
        }
    }
    if(counter > 0){
        return true;
    } else {
        return false;
    }
}
    hasVowels();

// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.

    function countVowels(string){
    var strLow = string.toLowerCase();
    var counter = 0;
    for (var n = 0; n < strLow.length; n++){
        if(strLow[n] === "a" || strLow[n] ==="e" || strLow[n] === "i" || strLow[n] === "o" ||  strLow[n]=== "u") {
            counter++;
        }
    }
    if(counter > 0){
        return counter;
    } else {
        return 0;
    }
}
    countVowels();

// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels

function removeVowels(string) {
    return string.replace (/[aeiou]/gi,'');
}
    removeVowels();


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel

    function startsWithVowel(str) {
    var fstLetter = str.charAt(0).toLowerCase();
    if (fstLetter === 'a' || fstLetter === 'e' || fstLetter === 'i' || fstLetter === 'o' || fstLetter === 'u'){
        return true;
    }
    return false;
}
    startsWithVowel();

// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel

    function endsWithVowel(str){
    var lstLetter = str[str.length - 1];
    if(lstLetter === 'a' || lstLetter === 'e' || lstLetter === 'i' || lstLetter === 'o' || lstLetter === 'u') {
        return true;
    }
    return false;
}
    endsWithVowel();

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

    function startsAndEndsWithVowel(str){
    var fstLetter = str.charAt(0).toLowerCase();
    var lstLetter = str[str.length - 1];
    if((fstLetter === 'a' || fstLetter === 'e' || fstLetter === 'i' || fstLetter === 'o' || fstLetter === 'u') &&
        (lstLetter === 'a' || lstLetter === 'e' || lstLetter === 'i' || lstLetter === 'o' || lstLetter === 'u')) {
        return true;
    }
    return false;
}
    startsAndEndsWithVowel();

// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

    function first(firstValue){
    return firstValue[0];
}
    first();

// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.

function second(secondValue){
    return secondValue[1];
}
second();

// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
function third(thirdValue){
    return thirdValue[2];
}

third();

// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
function forth(fourthValue){
    return fourthValue[3];
}

forth();

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
function last(lastValue){
    var indexLast = lastValue.length - 1;
    return lastValue[indexLast];
}

last();

// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.

function secondToLast(secondLast){
    var indexLast =  secondLast.length - 2;
    return secondLast[indexLast];
}
secondToLast();

// })();