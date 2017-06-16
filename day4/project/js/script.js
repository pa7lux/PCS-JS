//document.body.innerHTML = '<h1>Hello</h1>';
//var myDiv = document.body.getElementsByTagName('div');
//var myClass = document.body.getElementsByClassName('page');
//var myId = document.getElementById('paragraph');
//var mySelector = document.querySelector('#paragraph');
//window.addEventListener('load',function(){
//  var $ = function(selector){
//    return document.querySelector(selector);
////  }
//
//  $('button').addEventListener('click', function(){
//    let fontSize = $('#paragraph').style.fontSize;
//    if(fontSize < 30){
//      $('#paragraph').style.fontSize='30px';
//    } else {
//      $('#paragraph').style.fontSize='';
//    }
//  });
  //$('button').onclick = function(){
  //}
//});

$(document).ready(function(){
  $('button').on('click', function(){
    $('#paragraph').toggle();
  })
  $('.profile').click(function(){
    //$('.profilemenu').toggle();
    var cssDisplay = $('.profilemenu').css('display'});
    if(cssDisplay!='none'){
      $('.profilemenu').fadeOut('slow', function(){
        $('.profile').css('background-color','red');
      });
    }else {
      $('.profilemenu').fadeIn('slow', function(){
        $('.profilemenu ul').html('<h2>Your profile options</h2>')
      });
    }
  });
});
