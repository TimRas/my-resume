function fetchGitHubInformation() {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter valid username</h2>`);
        return;
    }
    
    $("#gh-user-data").html(
        `<div id="loader">
        <img src="assets/images/loader.gif" alt="loading..."/>
        </div>`
    );

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            var userData = response;
            $("gh-user-data").html(userInformationHTML(userData));
        }, function(errorRespone) {
            if (errorRespone.status === 404) {
                $("gh-user-data").html(
                    `<h2>No info found for user ${username}</h2>`
                )
            } else {
                console.log(errorRespone);
                $("gh-user-data").html(`<h2>Error: ${errorResponse.responseJSON.message </h2>`);
                }
            });
}