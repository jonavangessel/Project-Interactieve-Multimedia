// $( document ).ready(function() {
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
//         var data = '';
//         $.each(status, function (key, value) {
//                 data += value.description;
//         });
//         var description = data.replace(/undefined/g, "");
//         alert(description)
//     });
//
//
//     $('[data-toggle="popover"]').popover({title: "title", content: "description", animation: true});
//
//     $('.popover-dismiss').popover({
//         trigger: 'focus'
//     })
// });

function klik() {
    document.getElementById("overlay").style.display = "block";
    $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
        var data = '';
        $.each(status, function (key, value) {
            data += value.description;
        });

        var description = data.replace(/undefined/g, "");

        // var header = document.getElementById("overlayHeader");
        var overlay = document.getElementById("overlayText");

        overlay.innerHTML += description
    });
}

/**
 * Uses API to display description and title in popover
 */

// $(document).ready(function(){
//     var dataDescription = 'empty';
//     var dataTitle = 'empty';
//
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function(data) {
//         dataDescription = dataDescription.replace("empty", "'" + data.artObject.description + "'");
//         dataTitle = dataTitle.replace("empty", "'" + data.artObject.title + "'")
//     });
//
//     $('[data-toggle="popover"]').popover({title: dataTitle, content: dataDescription, animation: true});
//
//     $('.popover-dismiss').popover({
//         trigger: 'focus'
//     })
// });



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

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlayText").innerHTML = ''
}