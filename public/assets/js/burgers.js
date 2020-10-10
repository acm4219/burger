$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#yourburger").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
   $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");
    
        var newDevouredState = {
          devoured: true
                };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("Eaten", newDevouredState);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})