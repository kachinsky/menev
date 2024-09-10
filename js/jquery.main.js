$(document).ready(function () {
    $(document).on('click', '.toogle-menu', function(e){
        e.stopPropagation();
        e.preventDefault();
        $("body").toggleClass("open-nav");
        return false;
    });
    $(document).on('click', '.scrolltop', function(e){
        e.stopPropagation();
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    });
    $(document).on('click', '.menu li a, .logo, .btn-contact', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var headerHeight = $('#header').innerHeight();
        $('html, body').animate({
          scrollTop: $(target).offset().top - headerHeight
        }, 500);
    });
    $(document).on('click', '.active-lang', function(e){
        e.stopPropagation();
        e.preventDefault();
        if($(this).parents('.hold-languages').hasClass('open')){
            $(this).parents('.hold-languages').removeClass('open');
        }else{
            $(this).parents('.hold-languages').addClass('open');
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
    var height = $('.section-intro').height();
    if ($(this).scrollTop() > height) {
        $('.scrolltop').addClass('visible');
    } else {
        $('.scrolltop').removeClass('visible');
    }
});
