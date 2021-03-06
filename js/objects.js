(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
        var person = {
            firstName: "Rick",
            lastName: "Sanchez"
    };

        // person.firstName = "Rick";
        // person.lastName = "Sanchez";

    console.log(person.firstName);
    console.log(person.lastName);
    person.sayHello = function () {
        return "Hello from "  + person.firstName + " " + person.lastName + "!";
    }
    console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // shapes.forEach(function(shape) {
    //     console.log('Here is a lovely shape: ' + shape + '.');

    shoppers.forEach(function(shopper){
        var shopperDiscount = 0;
        var shopperTotal = 0;
        // var shopperTotal = shopper.amount -(shopper.amount * shopperDiscount);
        if(shopper.amount > 200){
        shopperDiscount = shopper.amount * .12;
        //console.log(shopperDiscount);
        shopperTotal = shopper.amount - shopperDiscount;
        console.log(shopper.name + " had an amount of " + shopper.amount + " before discount and a disount of " + shopperDiscount + " which means he paid " +  shopperTotal);
        }else{
            console.log(shopper.name + " had an amount of " + shopper.amount + " which means he had no discount and paid " + shopper.amount);
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var carOwner ={
    //     firstName: "Felecia",
    //     lastName: "Davis"
    // }
    // myCar.owner = carOwner;

    // var books = [{
    //         title: "The Salmon of Doubt",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //         createBook("James Joyce", "Ulysses"),
    //         {
    //             title: "Walkaway",
    //             author: {
    //                 firstName: "Gary",
    //                 lastName: "Doctorow"
    //         }
    //         },
    //         {
    //             title: "A Brief History of Time.",
    //             author: {
    //                 firstName: "Stephen",
    //                 lastName: "Hawking"
    //             }
    //         },
    //         {
    //             title: "The Cat in the Hat",
    //             author:{
    //                 firstName: "Dr.",
    //                 lastName:   "Seuss"
    //             }
       //     },
       //      {
       //          title: "Green Eggs and Ham",
       //          author: {
       //              firstName: "Dr.",
       //              lastName: "Seuss"
       //          }
       //      }
    // ]
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);
    //  console.log(books[4].title);
    // console.log(books[4].author.firstName);
    // console.log(books[4].author.lastName);
    //
    // console.log(books.length);

    var books = [
            createBook("Douglas Adams", "Salem of Doubt"),


            createBook("James Joyce", "Ulysses"),

            createBook("Gary Doctorow", "Walkaway"),


            createBook("Stephen Hawking", "A Brief History of Time"),

            createBook("Dr. Seuss", "The Cat inh the Hat"),

            createBook("Dr. Seuss", "Green  Eggs and Ham"),

        ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for(var i = 0; i < books.length; i++){
    //     console.log("Book # " + (i + 1));
    //     console.log("Title: " + books[i].title);
    //     console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    //     console.log("---");
    // }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
      function createBook(anAuthor, aTitle) {
        var namesArray = anAuthor.split(" ");
        var fName = namesArray[0];
        var lName = namesArray[1];
        var bookOb = {
            title: aTitle,
            author:
                {
                firstName: fName,
                lastName: lName
           }
        }
        return  bookOb;
    }
    console.log(createBook("James Joyce", "Ulysses"));
//createBook("James Joyce",);

     function showBookInfo(theBookArray) {
         //for (var i = 0; i < theBookArray.length; i++) {
         theBookArray.forEach(function(book, index){
             console.log(book);
         })


         //}
     }
    showBookInfo(books);

     function callbackBookInfo(book){
         console.log(book.title);
         console.log(book.author.firstName + " " + book.author.lastName);

     }
     books.forEach(callbackBookInfo)
    //
    // }
})();
