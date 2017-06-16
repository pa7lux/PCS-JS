$(document).ready(function(){
  $('button').click(function(){
    if($('div').hasClass('noNameClass')==true){
      $('div').removeClass('noNameClass');
    } else {
      $('div').addClass('noNameClass');
    }
  });

  $('.flyAway').click(function(){
    $('.letsFly').animate({'top':'-300px',
                          'left':'500px',
                          'width':'500px',
                          'height':'500px'},
                          5000,
                          'swing',
                          function(){
                            alert('I did it!');
                          });
  });
  $(window).scroll(function(){
    var i = $(document).scrollTop();
    console.log(i);
    if(i>=600){
      $('body').css('background-color', 'pink');
    }else{
      $('body').css('background-color', '');
    }
  });
});
