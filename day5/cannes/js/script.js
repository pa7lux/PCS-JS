$(document).ready(function(){
  // пишу попап
  $('.lions').click(function(){
    $('.popup').css({'display':'flex','background-color':'red'});
  });
  $('#close').click(function(){
    $('.popup').hide();
  });

  //пишу меню
  $('.menupic').click(function(){
    $('.mobileMenu').animate({'right':'0'}, 'slow');
  });
  $('.close').click(function(){
    $('.mobileMenu').animate({'right':'-100vw'}, 'slow');
  });

  //пишу параллакс львов
  var silverTop = parseInt($('.silver').css('top'));
  var bronzeTop = parseInt($('.bronze').css('top'));

  //отследим событие скролла на странице
  $(window).scroll(function(){
    var i = $(document).scrollTop();
    console.log(i);
    var animateSilver = silverTop - i + 'px';
    var animateBronze = bronzeTop - i*3 + 'px';
    $('.silver').css('top', animateSilver);
    $('.bronze').css('top', animateBronze);
  });
});
