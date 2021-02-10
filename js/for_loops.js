(function() {
    "use strict"

    function showMultiplicationTable(input) {
        for (var i = 1; i <= 10; i++) {
            console.log(input + " * " + i + " = " + (input * i));


        }
    }

    showMultiplicationTable(7);


    for (var i = 1; i <= 10; i++) {
        var random = Math.floor(Math.random() * 200) + 20;
        if (random % 2 === 0) {
            console.log(random + " is even.");
        } else {
            console.log(random + " is odd");
        }
    }


    for (var i = 100; i >= 5; i = i - 5) {
        console.log(i);
    }

})();