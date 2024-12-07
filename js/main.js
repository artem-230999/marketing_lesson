$(function() {
  $('.slider').slick({
    dots: true,
    arrows: false
  });


  // Mixitup
  var mixer = mixitup('.portfolio__content');

  // Fancybox
  Fancybox.bind('[data-fancybox]', {
    //
  });  
})