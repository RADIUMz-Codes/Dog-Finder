// $('select#cars').change(function(){
//     console.log($('select#cars').val());
// });

$(document).ready(function () {
    $.get('https://dog.ceo/api/breeds/list/all', function (data) {
        let arr = data.message;
        for (var key in arr) {
            $('#dogs').append(`<option value="${key}">${key.toUpperCase()}</option>`);
        }
    });

    /* ------------------------- Random Image Generator ------------------------- */
    function getRandom() {
        $.get('https://dog.ceo/api/breeds/image/random', function (data) {
            let imgUrl = data.message;
            $('#dog-img').attr("src", imgUrl);
            console.log('Displayed Random Image ', imgUrl);
        }).fail(function (xhr, textStatus, errThrown) {
            console.log('Request Failed', xhr.status);
        });
    };
    /* ---------------------- Breed Random Image Generator ---------------------- */
    function getByBreed(dogBreed) {
        let URL = 'https://dog.ceo/api/breed/' + dogBreed + '/images/random';
        $.get(URL, function (data) {
            let imgUrl = data.message;
            $('#dog-img').attr("src", imgUrl);
            console.log('Displayed Random Image By Breed');
        }).fail(function (xhr, textStatus, errThrown) {
            console.log('Request Failed', xhr.status);
        });
    };

    // For Welcome Screen
    getRandom();

    // Handeling Fetch Button
    $('#fetch').click(function () {
        getRandom();
    });

    // Fetch Image on Change
    $('select#dogs').change(function () {
        let dogBreed = $('select#dogs').val();
        getByBreed(dogBreed);
    });

    // Handeling Next Button
    $('#next').click(function () {
        let dogBreed = $('select#dogs').val();
        getByBreed(dogBreed);
    });

});
