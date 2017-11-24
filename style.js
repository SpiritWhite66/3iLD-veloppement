$("#who").css('opacity','0');

$(document).ready(function(){
  $('.slider').slider();

});
$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top-78 }, speed ); // Go
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
