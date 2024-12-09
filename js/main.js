$(function() {
  $('.slider').slick({
    dots: true,
    arrows: false
  });


  // Mixitup
  var mixer = mixitup('.portfolio__content');

  // Fancybox
  Fancybox.bind('[data-fancybox]', {});
  
  // Slick-slider
  $('.blog-slider__inner').slick({
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow" type="button"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button class="slick-next slick-arrow" type="button"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
  });
})