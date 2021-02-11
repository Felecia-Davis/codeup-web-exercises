
    "use strict"
    // var i = 1;
    // while(i < 65536){
    //     i = i * 2;
    //     console.log(i);
    // }


// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log(allCones);
// This expression will generate a random number between 1 and 5
    var totalSold = 0;
    var conesRemaining = 0;
   do {
       var numEachCustomer = Math.floor(Math.random() * 5) + 1;
       console.log(numEachCustomer);
       conesRemaining = allCones - totalSold;
       console.log(conesRemaining + " cone remaining.");
       // totalSold =  totalSold + numEachCustomer;
       // console.log(totalSold + " cones sold...")
       if(conesRemaining < numEachCustomer){
           console.log("Cannot sell you " + numEachCustomer + " cones I only have " + conesRemaining + "...");
       }else{
           totalSold =  totalSold + numEachCustomer;
            console.log(totalSold + " cones sold...")
       }

   } while (totalSold < allCones);


    // 5 cones sold...  // if there are enough cones
    // Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    // Yay! I sold them all! // If there are no more cones

