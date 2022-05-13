$(function() {
    $("#scroller_roll1").scroller_roll({
        title_show: 'enable',//enable  disable
        time_interval: '28',
        window_background_color: "transparent",
        window_padding: '0',
        border_size: '0',
        border_color: 'transparent',
        images_width: '410',
        images_margin: '0',
        title_size: '12',
        title_color: 'black',
        //show_count: '3'
    }); //향소개 슬라이드

    $(".sec3img_all").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows : true,
        adaptiveHeight: false,
        centerPadding: '0',
        speed : 1100
      }); //제품슬라이드

    $('.magazineimg_all').slick({
        infinite: true,
        slidesToShow: 1,
        speed:930,
        arrow: true,
        draggable: true,
        fade:true 
    }); //매거진슬라이드

});