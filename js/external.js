console.log("Hello from External Javascript.")
alert("Welcome to my website.");
var userInput = prompt('What is your favorite color?');
alert("Great " + userInput + " is my favorite color also.");

var price = 3.00
var lm = prompt('How many days are you renting "The Little Mermaid" movie?');
console.log(typeof lm);
alert(" The Little Mermaid for " + lm + " days.");
var bb = prompt('How many days are you renting the "Brother Bear" movie?');
alert("Brother Bear for " + bb + " days.");
var Herc = prompt('How many days are you renting the "Hercules" movie?');
alert("Hercules for " + Herc +" days.");
var totpay = (Number(lm)+ Number(bb)+ Number(Herc)) * price;
alert("You will have to pay $" + totpay + " for your movies.");

var googlepay = 400;
var amazonpay = 380;
var facebookpay = 350;

var googlehours = Number(prompt('How many hours did you work for Google?'));
alert(googlehours + " hours worked for Google.");
var googletotal = googlepay * googlehours;
alert("Total amount earned from Google is " + googletotal + ".");
 var amazonhours = Number(prompt('How many hours did you work for Amazon?'));
alert(amazonhours + " hours worked for Amazon.");
var amazontotal = amazonpay * amazonhours;
 alert("Total amount earned from Amazon is " + amazontotal + ".");
 var facebookhours = Number(prompt('How many hours did you work for Facebook?'));
alert(facebookhours + " hours worked for Facebook.");
var facebooktotal = facebookpay * facebookhours;
alert("Total amount earned from Facebook is " + facebooktotal);
var totalpay = googletotal + amazontotal + facebooktotal;
alert("Total for all is $" +  totalpay);

var classnotfull = confirm('Is there room in the class for another student?');
var noscheduleconflict = confirm('Does your schedule work with class schedule?');
alert("You can enroll in class is a " + (classnotfull && noscheduleconflict) + " statemnent.");

var moreThanTwo = confirm("Did you buy more than two items?");
var notExpired = confirm("Product is not expired?");
var premiumMember = confirm("You a premium member?");
alert("You can apply product offer is a " + ((moreThanTwo || premiumMember) && notExpired) + " statement.");