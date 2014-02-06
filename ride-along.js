$( document ).ready(function() {
  $('.ride-along').click(function(event){

      // Define some stuff
      var target = $(event.currentTarget);
      var index = target.data('ride-along-stop');
      var firstDiv = $('[data-ride-along-stop=1]');
      var nextDiv = $('[data-ride-along-stop="' + (index + 1) + '"]:first');
      var lastDiv = $('[data-ride-along-stop="' + (index + 2) + '"]:first');

      // Remove stray boxes
      $('.ride-along-box').remove();

      // Do stuff when the start or boxes are clicked
      if ((target.hasClass("ride-along-active") || target.hasClass("ride-along-start")) && (!target.hasClass('ride-along-last'))) {
        target.removeClass('ride-along-active').addClass('ride-along-completed');
        nextDiv.addClass('ride-along-active');
        nextDiv.append('<div class="ride-along-box">' + nextDiv.data('ride-along-text') + '</div>');

        // Animate scrolling
        $('html').animate({
            scrollTop: $('.ride-along-active').offset().top
        }, 700);
      }

      // Handle the last box differently
      if(lastDiv.length === 0) {
        nextDiv.addClass('ride-along-last');
      }
      if (target.hasClass('ride-along-last')) {
        $('.ride-along').removeClass('ride-along-active ride-along-last ride-along-completed');
      }
  });
});