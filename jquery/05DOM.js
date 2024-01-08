// remove disabled class from
$(".shoe-details").children().removeClass("disabled");

$('.shoe-details li').on('click', event => {
  $(event.currentTarget).addClass('active');
  $(event.currentTarget).siblings().removeClass("active");
});

// find()
// This method finds and targets singular or multiple elements 
// that are descendants of an element. 
// Unlike the .children() method, it traverses all descendants of 
// the specified element, not just the first level down. 

$(document).ready(() => {

  $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.product-details').next().toggle()
    $(event.currentTarget).find("img").toggleClass("rotate")
  });

  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');

    $(event.currentTarget).siblings().removeClass('active')

    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')


  });



  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function () {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})