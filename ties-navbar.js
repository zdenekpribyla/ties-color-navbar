document.addEventListener('DOMContentLoaded', function () {

    var tiesData = [
        {name: 'red', imgSrc: 'img/tie-red.png', link: 'https://vasekravaty.cz/cervene-kravaty'},
        {name: 'green', imgSrc: 'img/tie-green.png', link: 'https://vasekravaty.cz/cervene-kravaty'},
        {name: 'blue', imgSrc: 'img/tie-blue.png', link: 'https://vasekravaty.cz/cervene-kravaty'},
        {name: 'purple', imgSrc: 'img/tie-purple.png', link: 'https://vasekravaty.cz/cervene-kravaty'}
    ];

    var tieElementTarget = document.getElementById('ties-navbar');

    tiesData.forEach(function (tie) {
            var tieElement = ('<div class="tie__block"><a href="' + tie.link + '"><img class="tie__icon" src="' + tie.imgSrc + '"></a></div>');
            tieElementTarget.insertAdjacentHTML('beforeend', tieElement);
        }
    );

}, false);
