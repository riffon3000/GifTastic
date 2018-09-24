// initial Array of search topics used to create buttons and search from GIPHY API
var aTopics = ["dog", "cat", "batman", "omg", "what", "party"];

// function call to display buttons of topics array when page loads
createButtons();

// function to display gifs after AJAX call to GIPHY API
function displayGifs() {
    $("#gifs").empty();
    var name = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&limit=10&api_key=Wejq7Kof2nxeGqICbCSRGVOKcnTrjbo4";
    // AJAX call for button being clicked 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            for (j = 0; j < results.length; j++) {
                var topicsDiv = $("<div class=\"gifs p-2\">");
                var gif = $("<img>").attr("src", results[j].images.fixed_height_still.url);
                var p = $("<p>").text("Rating: " + results[j].rating + " (click to animate)");
                gif.addClass("still");
                $("#gifs").append(topicsDiv);
                topicsDiv.append(gif);  
                topicsDiv.append(p);             
            }
        });
}
//	Function to add user defined button from form
$("#addTopic").click(function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().trim();
    aTopics.push(topic);
    $("#topic-input").val("");
    createButtons();
});

//	Function to create buttons and display for items in topics array
function createButtons() {
    $("#topicButtons").empty();
    for (var i = 0; i < aTopics.length; i++) {
        var a = $("<button>");
        a.addClass("topic-btn");
        a.attr("data-name", aTopics[i]);
        a.text(aTopics[i]);
        a.attr("alt", aTopics[i]);
        $("#topicButtons").append(a);
    }
}
// click event to display gifs from topic buttons
$(document).on("click", ".topic-btn", displayGifs);

<<<<<<< HEAD
//	This function works to to start/stop gif on click
=======
//	This function works to to start/stop gif
>>>>>>> 986d78c23572a6798baad5c9c17a63d3079c510a
$(document).on("click", "img", function () {
    var src = $(this).attr("src");
    if ($(this).hasClass('still')) {
        //stop
        $(this).attr('src', src.replace("_s.gif", ".gif"));
        $(this).removeClass("still");
    } else {
        //play
        $(this).attr('src', src.replace(".gif", "_s.gif"));
        $(this).addClass("still");
    }
});
