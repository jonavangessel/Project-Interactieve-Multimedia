$( document ).ready(function() {
    $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
        var data = '';
        $.each(status, function(key, value){
            data += value.description
        });
        alert(data);
    });
});