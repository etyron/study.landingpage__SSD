$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap'),
        $sidebarArrow = $('.sidebar-menu-arrow');
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
    $sidebarArrow.click(function() {
        $(this).next().slideToggle(300);
    });

    $('.btn__more-1').click(function(){
        var hBlock = $('.box__more-1');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn__more-2').click(function(){
        var hBlock = $('.box__more-2');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn__more-3').click(function(){
        var hBlock = $('.box__more-3');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn__more-4').click(function(){
        var hBlock = $('.box__more-4');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn__more-5').click(function(){
        var hBlock = $('.box__more-5');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('section').on('click', function () {
        if($('.menu-wrap').hasClass('menu-show')){
            $('.menu-wrap').removeClass('menu-show');
            $('.toggle-button').removeClass('button-open');
        }
    });

    $("#header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 1500);
    });
    $("#mob__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top + 10}, 1500);
    });

    $(window).scroll(function(){
        var $sections = $('section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-100;
            var bottom = top +$(el).height() + 100;
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');

            }
        })
    });

    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

});
