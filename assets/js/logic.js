$(document).ready(function () {


    let btnArr = ["pi", "pie", "pai"]

    let giphy = $("#search-term").val() || $("data-name").val();

    const apiKey = "&api_key=e0CoSKwRiwa2Bc1BlmjsuBomeLoxmCcs";


    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + apiKey;


    function makeBtn() {
        // Clear button div
        $("#btn-div").empty();

        // Loop through the button arr

        for (let i = 0; i < btnArr.length; i++) {

            // generate buttons

            var b = $("<button>");

            // add class
            b.addClass("button");
            // data-attribute that shows the value of the search term at index i
            b.attr("data-name", btnArr[i]);
            // replace text with search term
            b.text(btnArr[i]);
            // append to #btn-div
            $("#btn-div").append(b);

        }
    }

    makeBtn();

    // on Click listener
    $("button").on("click", function () {


        console.log($("#search-term").val());
        giphy = $("#search-term").val() || $("#data-name").val();
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + apiKey;

        console.log(giphy);

        // event.preventDefault();

        // AJAX Request
        $.ajax({
                url: queryURL,
                method: "GET"
            })

            .then(function (response) {
                // What JSON data is pulled from the response []

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
        btnArr.push(giphy);

        makeBtn();
    })

})