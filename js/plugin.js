 /*loading window*/
$(window).on('load' , function() {  
    $(".loading-page").fadeOut(2000);  
 });

 $(document).ready(function () {
      
    $(".loading-page").removeClass('.loading-page'); 
   

    $('ul.navbar-nav > li').click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
    $(".navbar-toggler-icon").on('click',function(){
        $('.navbar .navbar-collapse').addClass('show-navbar')
    })
    $(".close-navbar").on('click',function(){
        $('.navbar .navbar-collapse').removeClass('show-navbar')
    })
    $('.owl-carousel.first-slider-page').owlCarousel({
        loop:true,
        
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    /*up icon*/
$(".circle-up").click(function(){
    $(window).scrollTop(0);
});

    $(window).scroll(function () {
        if ($(this).scrollTop() > 380) {
            $("header").css({ "backgroundColor": "#0e334f7e" });
        } else {
            $("header").css({ "backgroundColor": "transparent" });
        }
    });
    $('.owl-carousel.our-partenars-img').owlCarousel({
        loop:true,
        nav:true,
       dots:true,
       
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    });
    $('.owl-carousel.testimonials').owlCarousel({
        loop:true,
        nav:false,
       dots:true,
       margin:15,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});