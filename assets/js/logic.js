// Set Variables
// ========================================

const queryURL = "https:api.giphy.com/v1/gifs/" // Needs Query and API key
let btnArr = ["Btn 1", "Btn 2", "Btn 3"]
// Build Functions
// ========================================

// Create Processes
// ========================================





// AJAX Request
$.ajax({
    url: 'https://api.giphy.com/v1/gifs/trending?api_key=',
}).then(function (response) {
    console.log(response.data); // What JSON data is pulled from the response []
});

// function to create button element entered by user

function renderButton() {

    // Clear the #btn-div to prevent repeat buttons from being created in Array
    $("#btn-div").empty();

    // Loop through array of gif search terms
    for (let i = 0; i < btnArr.length; i++) {

        var b = $("<button>");

        b.addClass("gify");

        b.attr
    }
}