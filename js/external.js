console.log("Hello from External Javascript.")
alert("Welcome to my website");
var userInput = prompt('What is your favorite color?');
alert("Great " + userInput + " is my favorite color also.");

var price = 3.00
var lm = prompt('How many days are you renting this movie?');
alert("Little mermaid for " + lm + " days.");
var bb = prompt('How many days are you renting this movie?');
alert("Brother Bear for " + bb + " days.");
var Herc = prompt('How many days are you renting this movie?');
alert("Hercules for " + Herc +" days.");
var totpay = (lm + bb+ Herc) * price;
alert("You will have to pay $" + totpay + " for your movies.");

