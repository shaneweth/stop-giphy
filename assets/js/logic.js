let btnArr = ["btn1", "btn2", "btn3"]
// let giphy = $(this).attr("data-name");
const apiKey = "&api_key=e0CoSKwRiwa2Bc1BlmjsuBomeLoxmCcs";

let giphy = $("#search-term").val();

const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + apiKey;


// on Click listener
$("button").on("click", function (e) {

    e.preventDefault();
    console.log(giphy);

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