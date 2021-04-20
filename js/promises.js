
fetch("https://api.github.com/users/felecia-davis/events",{headers: {'Authorization': githubToken}}).then( response => {
    response.json().then( users => {
        // users.forEach( userObj  => {
        //     // do something with the username login
        //     console.log(userObj.created_at);
        // });
        console.log(users[0].created_at);
    });
});