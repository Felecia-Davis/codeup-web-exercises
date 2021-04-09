$(document).ready(function(){
    "use strict";
    console.log("Intro to AJAX!");
    var car = {
        make: "Chrysler",
        model: "Pacifica",
        year: 2018,
        funToDrive: true
    }
    // console.log("Should be a string", JSON.stringify(car));
    // var jsonOfCar = JSON.stringify(car);
    // console.log("json is a variable", jsonOfCar);
    // console.log("the object car", car);



    //JSON?


    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */
    var hookbinUrl = 'https://hookb.in/K3Zw6Y7lKVF0zzW3V6me';
    console.log($.ajax(hookbinUrl));


    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */
    $.ajax(hookbinUrl, {
        method: "POST",
        data: JSON.stringify(car)
    })


    // Send a get request and query for the username bob.

    $.ajax(hookbinUrl + "?username=bob");

    /*
     * TO DO: Refactor the third example using a GET request object instead of
     * appending a query to the url.
     */

    // $.ajax(hookbinUrl, {
    //     method: "GET",
    //     data: {
    //         username: "bob",
    //         active: true
    //     }
    // })

    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */

    // var swapiBaseURL = "https://swapi.dev/api/";
    //
    // $.ajax(swapiBaseURL + 'people/', {
    //     method: "GET",
    //     data: {
    //         search: "r2"
    //     }
    // }).done(function(data){
    //     console.log(data);
    // });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */

    // $.ajax(swapiBaseURL + "films/").done(function(data){
    //     console.log(data);
    // }).fail(function(jqXHR, status){
    //     console.log("failed to get films");
    //     console.log(status);
    //     console.log(jqXHR);
    // }).always(function(){
    //     console.log("Getting films");
    // });


    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */
    // var myBooks = $.ajax("data/books.json");

    // function onSuccess (data){
    //     console.log(data);
    // }
    //
    // function onFail(jqXhr){
    //     console.log("Check your file path.");
    // }
    //
    // function onAlways(){
    //     console.log("Looking for books...");
    // }

    // myBooks.done(onSuccess);

    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */

    // myBooks.fail(onFail);

    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */

    // myBooks.always(onAlways);

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */

    // var swapiFilmsRequest = $.ajax(swapiBaseURL + "films/");
    //
    // swapiFilmsRequest.fail(function() {
    //    console.log("Failed to load films.");
    // });

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */

    // swapiFilmsRequest.always(function(){
    //     console.log('Loading Star Wars films........')
    // })


    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     *
     * Take a look at the object that is being returned. Write a console log
      * that displays the director of the film.
     */

    // var newHopeSwapiRequest = $.ajax(swapiBaseURL + 'films/', {
    //     method: 'GET',
    //     data: {
    //         search: 'A New Hope'
    //     }
    // });
    //
    // newHopeSwapiRequest.done(function(data){
    //     console.log(data);
    //     console.log(data.results[0].director);
    // });

    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */

    // var newHopeSwapiRequest = $.ajax(swapiBaseURL + 'films/1/');
    //
    // newHopeSwapiRequest.done(function(data){
    //     console.log(data.director);
    // });

    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */

    // var booksRequest = $.ajax("data/books.json");
    //
    // console.log(booksRequest); //Is not our data.
    //
    // booksRequest.done(function(data){
    //     console.log('At the bottom of the file', data);
    //     data.forEach(function(book){
    //         //console.log(book);
    //         if(book.title === "The Canterbury Tales"){
    //             console.log("The author of Canterbury Tales is " + book.author);
    //         }
    //     });
    // });


    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */

    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */

    // this variable stores our request

    // function generateBooks(){
    //     var booksRequest = $.ajax("data/books.json");
    //
    //     booksRequest.done(function(data){
    //
    //         $.each(data, function(index, book){
    //             var content = "";
    //             content += "<h2>" + book.title + "</h2>"
    //             content += "<h4>" + book.author + "</h4>"
    //             console.log(content);
    //             $('#main').append(content);
    //         });
    //     });
    //
    //     booksRequest.fail(function(){
    //         $('#main').append("<h1>Error getting books! :(</h1>")
    //     })
    // }

    // call the function to generate data on page load

    // generateBooks();



    /*
     * TO DO: Add your favorite book to the end of books.json.
     */

    /*
     * Bonus: Create a button that refreshes the contents of your html
     * without refreshing the page.
     */

    // event listener on refresh button
//     $('#refresh').click(function(e){
//         console.log("Refresh button was clicked.");
//         $('#main').html('');
//         generateBooks();
//     });
//
});