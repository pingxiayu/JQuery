$(document).ready(function() {
    $('#submit').click(function() {
        $.ajax({
            type: "GET",
            url: "some.json",
            dataType: "json",
            success: function(data) {
                var drinks = "<ul>";
                $.each(data, function(index, value) {
                    drinks += "<li>" + value['optionvalue'] + "</li>";
                });
                drinks += "</ul>";
                $('#message').append(drinks);
            }
        });
        return false;
    });

});