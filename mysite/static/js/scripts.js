$(document).ready(function () {
    fullPageInit();
    drawMap();
    animateInit();
});
var wasBoxesAnimated = false;
var wasSocialAnimated = false;
function fullPageInit() {
    $('#fullpage').fullpage({

        anchors: ['uvod', 'ome', 'sluzby', 'zkusenosti', 'popis', 'kontakt', 'mapa'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Úvod', 'O mě', 'Služby', 'Portfolio', 'Text', 'Kontakt', 'Odkud jsem'],
        css3: true,
        responsiveWidth: 1280,
        responsiveHeight: 1280,

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
                if (wasBoxesAnimated == false) {
                    var boxes = $('#portfolio .box').addClass('animated').addClass('zoomIn');
                    setTimeout(function () {
                        boxes.removeClass('animated zoomIn');
                        wasBoxesAnimated = true;
                    }, 1000);
                }
            }
            if (index == 6) {
                if (wasSocialAnimated == false) {
                    var social = $('#contact .social a');
                    social.each(function (index, element) {
                        var timeout = 0;
                        switch (index) {
                            case 0:
                                timeout = 0;
                                break;
                            case 1:
                                timeout = 200;
                                break;
                            case 2:
                                timeout = 400;
                                break;
                            case 3:
                                timeout = 600;
                                break;
                            case 4:
                                timeout = 800;
                                break;
                        }
                        setTimeout(function () {
                            $(element).css({
                                "visibility" : "visible"
                            });
                            $(element).addClass('animated fadeInUp');
                        }, timeout);
                    });
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
    });
    $('#portfolio .box').mouseout(function () {
        $(this).removeClass('animated pulse');
    });

}