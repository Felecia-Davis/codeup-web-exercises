(function() {
    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    function analyzeColor(colorName) {
        if (colorName === "blue") {
            console.log("blue is the color of the sky");
        } else if (colorName === "red") {
            console.log("Strawberries are red.");
        } else if (colorName === "cyan") {
            console.log("I don't know anything about cyan");
        } else {
            console.log("This is not one of the colors");

        }
    }

    analyzeColor("green");
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    analyzeColor(randomColor);
    console.log(randomColor);

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    function colorAnalyze(color) {
        switch (color) {
            case "blue":
                console.log("blue is the color of the sky");
                break;
            case "red":
                console.log("Strawberries are red");
                break;
            case "cyan":
                console.log("I don't know anything about that.");
                break;
            default:
                console.log("This is not one of the colors.");
                break;
        }
    }

    colorAnalyze("blue");
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var colorEntered = prompt("Enter a color");
    alert("You entered " + colorEntered + ". " + analyzeColor(colorEntered));

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNum, amountTotal) {
        var totalAmount;
        if (luckyNum === 0) {
            console.log("Your total is  $" + amountTotal);
        } else if (luckyNum === 1) {
            amountTotal = (amountTotal - (.1 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 2) {
            amountTotal = (amountTotal - (.25 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 3) {
            amountTotal = (amountTotal - (.35 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 4) {
            amountTotal = (amountTotal - (.5 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 5) {
            amountTotal = (amountTotal - (1 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else {
            console.log("You have no discount applied");
        }
    }

    calculateTotal(8, 100);
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
//Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    var Bill = parseFloat(prompt("What is your total bill?"));

    function calculateTotal(luckyNum, amountTotal) {
        var totalAmount;
        if (luckyNum === 0) {
            console.log("Your total is  $" + amountTotal);
            alert("Your Lucky number is " + luckyNum + "and Bill before discount is " + Bill + ", with discount" + amountTotal);
        } else if (luckyNum === 1) {
            amountTotal = (amountTotal - (.1 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 2) {
            amountTotal = (amountTotal - (.25 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 3) {
            amountTotal = (amountTotal - (.35 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 4) {
            amountTotal = (amountTotal - (.5 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else if (luckyNum === 5) {
            amountTotal = (amountTotal - (1 * amountTotal));
            console.log("Your total is $" + amountTotal);
        } else {
            console.log("You have no discount applied");
        }
    }

    calculateTotal(luckyNumber, Bill);
    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     //  */
    var confirmed = confirm("Would you like to enter a number");
//        If(confirmed)
// {
//          var numChosen = Number(prompt("What is the number you choose?"));
//          If(confirmed){
//          if(numChosen % 2 === 0) {
//              console.log(numChosen + " is even.")
//          }else {
//              console.log(numChosen + " is odd.")
//          }
//          console.log(return 100 +  numChosen);
//
//          isNan(numChosen)
//
//
//
// }else {
//
// }
})();