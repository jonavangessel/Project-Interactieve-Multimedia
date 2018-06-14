// $( document ).ready(function() {
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
//         var data ='';
//         $.each(status, function(key, value){
//             if(value.description !== 'undefined'){
//                 data += value.description;
//             }
//         });
//         alert(data)
//     });
// });

$( document ).ready(function() {
    $("#info").click(function () {
        $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
            var dataTitle = '';
            var dataDescription = '';
            $.each(status, function (key, value) {
                dataDescription += value.description;
                dataTitle += value.title;
            });
            alert(dataTitle);
            $('#info').attr({
                "title": dataTitle,
                "data-content": dataDescription
            });
        });
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