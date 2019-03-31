$(function () {
  
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
  
        var eaten = {
            devoured: true
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        // console.log("form create clicked");
        var burger = {
            name: $("#burg").val().trim(),
            defaut: false
        };
        $.ajax("/api/burger", {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("new burger added.");
                location.reload();
            }
        );
    });


});
