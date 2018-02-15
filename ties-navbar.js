document.addEventListener('DOMContentLoaded', function () {

    var tiesData = [
        {name: 'red', imgSrc: 'img/tie-red.png', link: 'https://vasekravaty.cz/cervene-kravaty'},
        {name: 'green', imgSrc: 'img/tie-green.png', link: 'https://vasekravaty.cz/cervene-kravaty'},
        {name: 'blue', imgSrc: 'img/tie-blue.png', link: 'https://vasekravaty.cz/cervene-kravaty'},
        {name: 'purple', imgSrc: 'img/tie-purple.png', link: 'https://vasekravaty.cz/cervene-kravaty'}
    ];

    var tieElementTarget = document.getElementById('ties-container');
    var tieElements = [];
    tiesData.forEach(function (tie) {
        var tieElement = ('<div class="tie__block"><a href="' + tie.link + '"><img class="tie__icon" src="' + tie.imgSrc + '"></a></div>');
        tieElements.push(tieElement);
    });


    function getSum(total, num) {
        return total + num;
    }

    function tieContainer() {
        return '<div class="ties__navbar"><div class="ties__container"><div class="ties__container-title">Kravaty dle barvy:</div>'
            + tieElements.reduce(getSum) + '</div></div>';

    }

    tieElementTarget.insertAdjacentHTML('beforeend', tieContainer());


    //-----------------------------------------------------------------

    var priceNavbarTarget = document.getElementById('price__navbar');
    var priceElement = (
        '<div class="price__benefit"><div class="price__benefit-single">' +
        '<div class="price__benefit-single__icon"><img src="http://pribyla.com/images/vesak.png" class="price__benefit-single__img">' +
        '</div><div class="price__benefit-single__text-block">' +
        '<div class="price__benefit-single__title"><span>TITLE</span></div><div class="price__benefit-single__text"><span>dffffff  ve fólii s malým věšáčkem</span></div> ' +
        '</div></div><div class="price__benefit-single">' +
        '<div class="price__benefit-single__icon"><img src="http://pribyla.com/images/vesak.png" class="price__benefit-single__img"></div> ' +
        '<div class="price__benefit-single__text-block"><div class="price__benefit-single__title"><span>TITLE</span></div>' +
        '<div class="price__benefit-single__text"><span>dffffff  ve fólii s malým věšáčkem</span></div></div></div>' +
        '<div class="price__benefit-single">' +
        '<div class="price__benefit-single__icon"><img src="http://pribyla.com/images/vesak.png" class="price__benefit-single__img">' +
        '</div><div class="price__benefit-single__text-block"><div class="price__benefit-single__title"><span>TITLE</span></div> ' +
        '<div class="price__benefit-single__text"><span>dffffff  ve fólii s malým věšáčkem</span></div>' +
        '</div></div></div>'
    )
    priceNavbarTarget.insertAdjacentHTML('beforeend', priceElement);


    //404 redirect
    var targetElement = document.getElementsByClassName('404-block');
    for (var i = 0; i < targetElement.length; i++) {
        var whereToCheck = targetElement[i];
        if
        (whereToCheck.innerHTML.indexOf('cool tie') != -1) {
            window.location.replace('https://www.vasekravaty.cz')
        }
    }


}, false);