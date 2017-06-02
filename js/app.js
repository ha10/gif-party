var topics = [
  "i love you",
  "it’s not you it’s me",
  "ghosting",
  "swipe left",
  "swipe right",
  "netflix and chill",
  "single",
  "he’s just not that into you",
  "there’s plenty of fish in the sea",
  "we need to talk",
  "i miss you",
  "you came in like a wrecking ball",
  "performance anxiety",
  "compromise",
  "i love you so much",
  "about last night",
  "side chick",
  "dad bod",
  "friend zoned"
];

for (var i = 0; i < topics.length; i++) {
  $("#the-clickers").append(
    "<button id='" + topics[i] + "'>" + topics[i] + "</button>"
  );
}

$("button").click(function(event) {

  var buttonID = $(this).attr("id");
  var searchTerm = buttonID;
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonID + "&api_key=dc6zaTOxFJmzC";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).done(function(response){

    theResponse = response;

    $("#gif-party").empty();

    for (var i = 0; i < response.data.length; i++) {
      $("#gif-party").append(
        "<img src='"
        + response.data[i].images.fixed_height_still.url
        + "' id='"
        + response.data[i].id
        + "'"
        + "class='gif'"
        + "state='still'"
        + "animated-gif='"
        + response.data[i].images.fixed_height.url
        + "'"
        + "still-gif='"
        + response.data[i].images.fixed_height_still.url
        + "'"
        + ">");
    }
  });
});

$(document).on('click', '.gif', function() {
  var currentState = $(this).attr("state");
  var animatedURL = $(this).attr("animated-gif");
  var stillURL = $(this).attr("still-gif");

  if (currentState === "still") {
    $(this).attr("src", animatedURL);
    $(this).attr("state", "animated");
  } else if (currentState === "animated") {
    $(this).attr("src", stillURL);
    $(this).attr("state", "still")
  }
});

$("#search-btn").on("click", function(event){
  event.preventDefault();
  var searchTerm = $("#search-text").val();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).done(function(response){

    theResponse = response;

    $("#gif-party").empty();
    for (var i = 0; i < response.data.length; i++) {
      $("#gif-party").append(
        "<img src='"
        + response.data[i].images.fixed_height_still.url
        + "' id='"
        + response.data[i].id
        + "'"
        + "class='gif'"
        + "state='still'"
        + "animated-gif='"
        + response.data[i].images.fixed_height.url
        + "'"
        + "still-gif='"
        + response.data[i].images.fixed_height_still.url
        + "'"
        + ">");
    }
  });
});
