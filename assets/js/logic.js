


// Set Variables
// ========================================
// Not sure if these should be Global...

let btnArr = ["Btn 1", "Btn 2", "Btn 3"]
let giphy = $(this).attr("button");
const apiKey = "&api_key=e0CoSKwRiwa2Bc1BlmjsuBomeLoxmCcs";
const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + apiKey; // Needs Query and API key

// Build Functions
// ========================================


// on Click listener
$("button").on("click", function () {

    // AJAX Request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response.data.embed_url); // What JSON data is pulled from the response []
        });
})

// Create Processes
// ========================================







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