


// Set Variables
// ========================================
// Not sure if these should be Global...

let btnArr = ["Btn 1", "Btn 2", "Btn 3"]
let giphy = $(this).attr("data-name");
const apiKey = "&api_key=e0CoSKwRiwa2Bc1BlmjsuBomeLoxmCcs";
const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + apiKey;

// Build Functions
// ========================================
function makeBtn() {

    // Clears the button div, to avoid duplicates
    $("#btn-div").empty();

    // Loop through array of buttons
    for (let i = 0; i < btnArr.length; i++) {

        // Dynamically generate buttons

        var b = $("<button>");

        // Add the class
        b.addClass("button");
        // data-attribute with value of the search term at index i
        b.attr("data-name", btnArr[i]);
        // replace text with search term
        b.text(btnArr[i]);
        //add the button to #btn-div
        $("#btn-div").append(b);
    }
}

$("button").on("click", function (event) {

    event.preventDefault();

    var giphy = $("#search-term").val().trim();
    btnArr.push(giphy);

    makeBtn();
});

makeBtn();

// on Click listener
$("button").on("click", function () {

    // AJAX Request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response.data); // What JSON data is pulled from the response []

            let gifURL = response.data;

            for (let i = 0; i < gifURL.length; i++) {

                if (gifURL[i].rating !== "r" && gifURL[i].rating !== "pg-13") {

                    var gifDiv = $("<div>");

                    var rating = gifURL[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var gifImg = $("<img>");

                    gifImg.attr("src", gifURL[i].images.fixed_height.url);

                    gifDiv.append(p);
                    gifDiv.append(gifImg);

                    $("#gif-section").prepend(gifDiv);
                }
            }
        });
})

// Create Processes
// ========================================






