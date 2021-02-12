
    "use strict"

    var i = 1;
    while(i < 65536){
        i = i * 2;
        console.log(i);
    }


// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log(allCones);
// This expression will generate a random number between 1 and 5
    var totalSold = 0;
    var conesRemaining = 0;
   do {
       // This expression will generate a random number between 1 and 5
       var numEachCustomer = Math.floor(Math.random() * 5) + 1;
       console.log(numEachCustomer + " cone(s) requested by customer.");
       conesRemaining = allCones - totalSold;
       console.log(conesRemaining + " cone(s) remaining.");
       if(conesRemaining < numEachCustomer){
           console.log("Cannot sell you " + numEachCustomer + " cones I only have " + conesRemaining + "...");
           totalSold= totalSold + conesRemaining;
           console.log("Thank you for buying the " + conesRemaining +  " cone(s).")
       }else{
           totalSold =  totalSold + numEachCustomer;
            console.log(totalSold + " cones sold...")
       }

   } while (totalSold < allCones);
   console.log(totalSold + " total cones sold.");
   console.log("Yay! I sold them all!");


    // 5 cones sold...  // if there are enough cones
    // Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    // Yay! I sold them all! // If there are no more cones

