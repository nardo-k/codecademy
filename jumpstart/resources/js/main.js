$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

 var userScrollValue = 0;
 $(window).scroll(function(){
   var scrollTopProperty = $(this).scrollTop();
   if (scrollTopProperty - userScrollValue > 50){
     var navbarHeight = $('.navbar').css('height');
     $('.navbar').animate({top: '-' + navbarHeight}, 150);
     userScrollValue = scrollTopProperty;
   } else if(userScrollValue - scrollTopProperty > 50){
     $('.navbar').animate({top: '0px'}, 150);
     userScrollValue = scrollTopProperty;
   }
 })

});
