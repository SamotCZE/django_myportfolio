$(document).ready(function () {
    fullPageInit();
    drawMap();
});

function fullPageInit() {
    $('#fullpage').fullpage({
        anchors: ['uvod', 'ome', 'sluzby', 'zkusenosti', 'popis', 'kontakt', 'mapa'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Úvod', 'O mě', 'Služby', 'Portfolio', 'Text', 'Kontakt', 'Odkud jsem'],
        css3: true,
        scrollOverflow: true,

        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {
                $('.myheader').delay(700).fadeIn('slow')
            }
            else if (nextIndex == 1) {
                $('.myheader').fadeOut('slow');
            }
        },
    });
}

function drawMap() {
    var map = new GMaps({
        el: '#map',
        lat: 49.872474,
        lng: 18.426268
    });
}