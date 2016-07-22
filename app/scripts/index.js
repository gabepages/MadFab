var $ = require('jquery');
var _ = require('underscore');





$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 700);
      return false;
    }
  }
});



$('#email').on('focus', function(){
  $('#email-label').addClass('active');
});
$('#email').on('focusout', function(){
  if($('#email').val() == ''){
    $('#email-label').removeClass('active');
  }
});

$('#name').on('focus', function(){
  $('#name-label').addClass('active');
});
$('#name').on('focusout', function(){
  if($('#name').val() == ''){
    $('#name-label').removeClass('active');
  }
});

$('#message').on('focus', function(){
  $('#message-label').addClass('active');
});
$('#message').on('focusout', function(){
  if($('#massage').val() == '' || $('#massage').val() == undefined){
    $('#message-label').removeClass('active');
  }else{
    console.log($('#massage').val());
  }
});




$('.hamburger-menu').on('click', function(){
  $('#dropdown').toggleClass('drop-menu');
});
