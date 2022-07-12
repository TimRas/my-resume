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

}