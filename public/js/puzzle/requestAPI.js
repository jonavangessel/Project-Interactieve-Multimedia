$( document ).ready(function() {
    $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
        var data ='';
        $.each(status, function(key, value){
            if(value.description !== 'undefined'){
                data += value.description;
            }
        });
        // alert(data)
    });
});

// $( document ).ready(function() {
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (image) {
//         var photo = '';
//         $.each(image, function(key, value){
//             photo += value.webImage.url
//         });
//         $('#image').append(photo);
//     });
// });