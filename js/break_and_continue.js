(function(){
    "use strict"

    var  userNumberEntered ;
    while (true) {
        userNumberEntered = Number(prompt("Enter an odd number between 1-50"));
        if ((userNumberEntered % 2 !== 0) && ((userNumberEntered >1) || (userNumberEntered < 50))) {
        break;
        }
        alert("Not odd or between 1 and 50");
    }
        alert("Odd number between 1 and 50");
        for(var i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                continue;
            } else {
                if (userNumberEntered === i) {
                    console.log("Yikes! Skipping number: " + userNumberEntered);
                    continue;
                }
                console.log(i);
            }
        }

})();