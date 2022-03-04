$(function(){
   selector: '.my-video-links',


   $('.test_slide').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2500,
    nav:true,
    navText:['<i class="fa-solid fa-arrow-left arw_lft"></i>','<i class="fa-solid fa-arrow-right arw_right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});
});