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
    });

    var priceNavbarTarget = document.getElementById('price__navbar')
    var priceElement = (
        '<div class="price__benefit">\n' +
        '        <div class="price__benefit-single">\n' +
        '            <div class="price__benefit-single__icon"><img src="http://pribyla.com/images/vesak.png"\n' +
        '                                                          class="price__benefit-single__img"></div>\n' +
        '            <div class="price__benefit-single__text"><span>dffffff  ve fólii s malým věšáčkem</span></div>\n' +
        '        </div>\n' +
        '        <div class="price__benefit-single">\n' +
        '            <div class="price__benefit-single__icon"><img src="http://pribyla.com/images/vesak.png"\n' +
        '                                                          class="price__benefit-single__img"></div>\n' +
        '            <div class="price__benefit-single__text"> dffffff ve fólii s malým věšáčkem</div>\n' +
        '        </div>\n' +
        '        <div class="price__benefit-single">\n' +
        '            <div class="price__benefit-single__icon"><img src="http://pribyla.com/images/vesak.png"\n' +
        '                                                          class="price__benefit-single__img"></div>\n' +
        '            <div class="price__benefit-single__text"><span>dffffff  ve fólii s malým věšáčkem</span></div>\n' +
        '        </div>\n' +
        '    </div>'
    )
    priceNavbarTarget.insertAdjacentHTML('beforeend', priceElement)
}, false);