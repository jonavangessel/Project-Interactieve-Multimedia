/**
 * Load the Nachtwacht's title and description from Rijksmuseum's API.
 */
function klik() {
    document.getElementById("overlay").style.display = "block";
    $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (status) {
        var titel = '';
        var beschrijving = '';
        $.each(status, function (key, value) {
            titel += value.title;
            beschrijving += value.description;
        });

        var titlePainting = titel.replace(/undefined/g, "");
        var descriptionPainting = beschrijving.replace(/undefined/g, "");
        var divTitel = document.getElementById("titel");
        var divBeschrijving = document.getElementById("beschrijving");

        divTitel.innerHTML += titlePainting;
        divBeschrijving.innerHTML += descriptionPainting;
    });
}

/**
 * Load image from the Nachtwacht into the sliding puzzle.
 */
// $(document).ready(function() {
//     $.get("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=SGSqBgrf&format=json", function (image) {
//         var photo = 'http://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0';
//         document.getElementById("hello").setAttribute("src", photo)
//     });
// });

/**
 * Turns off overlay, removes content and redirects users back to reference page.
 */
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlayText").innerHTML = '';
    window.location.replace("enterReference.html")
}