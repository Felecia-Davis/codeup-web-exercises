(function() {
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
        numSquare = numSquare * numSquare;
        return numSquare;
    }

    square();

    // Exercise 30
    // Write a function definition named add that takes in two numbers and returns the sum.

    function add(firstNum, secondNum) {
        var sumNum = firstNum + secondNum;
        return sumNum;
    }

    add();
})();