$("#who").css('opacity','0');
changeOpacity();
$(document).ready(function(){
  $('.slider').slider();
    $( ".devis" ).fadeTo( 2000, 1 );
  $('select').material_select();

});
$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top-58 }, speed ); // Go
    return false;
  });
});

function showDiv(el)
{
  el.animate({ opacity: '1'}, 1000);
}

var options = [
  {selector: '#who', offset: 200, callback: function(el) { showDiv($(el)); } },
  {selector: '#team', offset: 150, callback: function(el) { Materialize.fadeInImage($(el)); } } ];
  Materialize.scrollFire(options);

function changeOpacity()
{
  var o = $(document).scrollTop() / 100;
  if (o > 1.000) { o = 1;}
  var e = $('nav');

  $('nav').css('background-color', "rgba(255,255,255," + o + ")");
  if(o<0.2)
  {
    $('nav a').css('color', "white");
    $('nav').css('box-shadow', "none");
    if($('#logo-container img').attr("src")!="images/logo_400px_orange.png")
      $('#logo-container img').fadeOut(0, function () {
        $(this).attr('src', "images/logo_400px_orange.png").fadeIn(0);
      });
  }
  else{
    $('nav a').css('color', "");
    $('nav').css('box-shadow', "  ");
    if($('#logo-container img').attr("src")!="images/logo_400px.png")
      $('#logo-container img').fadeOut(0, function () {
        $(this).attr('src', "images/logo_400px.png").fadeIn(0);
      });
  }
}
  $(document).on('scroll', function (e) {
      e.preventDefault();
      changeOpacity();
  });
