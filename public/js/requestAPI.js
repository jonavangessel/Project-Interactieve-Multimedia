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
//
// function klik() {
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
//         var dataTitle = '';
//         var dataDescription = '';
//         $.each(status, function (key, value) {
//             dataDescription += value.description;
//             dataTitle += value.titles;
//         });
//         document.getElementById("bij").setAttribute("title", dataTitle);
//         document.getElementById("bij").setAttribute("data-content", dataDescription)
//     });
// }

/**
 * Uses API to display description and title in popover
 */

$(document).ready(function(){
    var dataDescription = 'empty';
    var dataTitle = 'empty';

    $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function(data) {
        dataDescription = dataDescription.replace("empty", "'" + data.artObject.description + "'");
        dataTitle = dataTitle.replace("empty", "'" + data.artObject.title + "'")
    });

    $('[data-toggle="popover"]').popover({title: dataTitle, content: dataDescription, animation: true});

    $('.popover-dismiss').popover({
        trigger: 'focus'
    })
});



// $(document).ready(function() {
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (image) {
//         var photo = 'http://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0';
//         document.getElementById("hello").setAttribute("src", photo)
//     });
// });

// if (slidingPuzzle.isSolved() === true) {
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
//         var dataTitle = '';
//         var dataDescription = '';
//         $.each(status, function (key, value) {
//             dataDescription += value.description;
//             dataTitle += value.titles;
//         });
//         alert("yehes")
//     });
// }