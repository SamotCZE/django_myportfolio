$(document).ready(function () {
    fullPageInit();
    drawMap();
    animateInit();
});
var wasBoxesAnimation = false;
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
                $('.myheader').delay(700).fadeIn('slow');
            }
            else if (nextIndex == 1) {
                $('.myheader').fadeOut('slow');
            }
        },

        afterLoad: function (anchorLink, index) {

            if (index == 2) {
                $('#about .container').show();
                $('#about h2').addClass('animated').addClass('fadeInDown');
                $('#about p').first().addClass('animated').addClass('fadeInDown');
                $('#about p').slice(1,4).addClass('animated').addClass('fadeInUp');
            }
            if (index == 3) {
                $('#services .container').css("visibility", "visible");
                $('#services h2').addClass('animated').addClass('fadeInDown');
                $('#offer').addClass('animated').addClass('fadeInUp');
            }
            if (index == 4) {
                $('#portfolio .container').css("visibility", "visible");
                $('#portfolio h2').addClass('animated').addClass('fadeInDown');
                $('#portfolio p').first().addClass('animated').addClass('fadeInDown');
                if (wasBoxesAnimation == false) {
                    var boxes = $('#portfolio .box').addClass('animated').addClass('zoomIn');
                    setTimeout(function () {
                        boxes.removeClass('animated zoomIn');
                        wasBoxesAnimation = true;
                    }, 1000);
                }

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

function animateInit() {

    $('#portfolio .box').mouseover(function () {
        $(this).addClass('animated pulse');
    })
    $('#portfolio .box').mouseout(function () {
        $(this).removeClass('animated pulse');
    })
}