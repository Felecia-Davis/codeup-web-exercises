
$(document).ready(function(){

//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!

    $("#changeBoxSize").click(function(){
        $("#box").css("height", "500px")
        $("#box").css("width", "500px")

    })
//TODO: I have two CSS classes - toggleClass1 and toggleClass2 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!
var instructions = function(e){
    if($(("#box").style.background-color === (".toggleClass1") ) {
        // $("#box").toggleClass(".toggleClass2")
        $("#toggleclass").css(".toggleClass2")
    }else{
        $("#toggleClass").css(".toggleClass1")
    }
}
$("#toggleClass").click(instructions);

//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]



    // $('#box').hover(
    //     function() {
    //         $('#box').css('background-color', '#F00');
    //     },
    //     function() {
    //         $('#box').css('background-color', '#000');
    //     }
    // )

//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the box should replace what was inside of the span #userName with the input's contents

//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."

console.log("Are we there yet.");



})
