$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $(".menu-button").css("color", "#C3FF00");
    // $('.menu-button').css({
    //   color: '#C3FF00',
    //   backgroundColor: '#535353'
    //  })

    $(".menu-button").animate({
      fontSize: "24px"
    }, 200);
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $(".menu-button").css("color", "#EFEFEF");
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })

});

