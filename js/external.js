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

var googlepay = 400;
var amazonpay = 380;
var facebookpay = 350;

var googlehours = prompt('How many hours did you work for Google?');
alert(googlehours + " hours worked for Google.");
var googletotal = googlepay * googlehours;
alert("Total amount earned from Google is " + googletotal);
var amazonhours = prompt('How many hours did you work for Amazon');
alert(amazonhours + " hours worked for Amazon.");
var amazontotal = amazonpay * amazonhours;
alert("Total amount earned from Google is " + amazontotal);
var facebookhours = prompt('How many hours did you work for Facebook');
alert(facebookhours + " hours worked for Facebook.");
var facebooktotal = facebookpay * facebookhours;
alert("Total amount earned from Google is " + facebooktotal);
var totalpay = googletotal + amazontotal + facebooktotal;
alert("Total for all is $" +  totalpay);