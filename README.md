ride-along
==========

### Usage


Demo: 
<http://dennis-best.github.io/ride-along/>

Add/update your markup:

__ride-along-start__ Add this class to ONE element to trigger the walkthrough.

Then add data attributes to as many elements as you like:

__data-ride-along-stop__ Sets the order of the elements. They can be anywhere in the document. 

__data-ride-along-text__ Sets the text/html of the box.

You'll end up with something this:

    <div class="ride-along ride-along-start"  data-ride-along-stop="1">Start</div>

    <article  class="ride-along"  data-ride-along-stop="2" data-ride-along-text="<h3>Use HTML Here</h3><p>Blah blah blah.</p>">

    <article  class="ride-along"  data-ride-along-stop="2" data-ride-along-text="<h3>Use HTML Here</h3><p>Blah blah blah.</p>">

The script will bounce through the elements until it reaches the last element. Then stop.

### Javascript

`
$( document ).ready(function() {
  $('.ride-along').click(function(event){

      // Define some stuff
      var target = $(event.currentTarget);
      var index = target.data('ride-along-stop');
      var firstDiv = $('[data-ride-along-stop=1]');
      var nextDiv = $('[data-ride-along-stop="' + (index + 1) + '"]');
      var lastDiv = $('[data-ride-along-stop="' + (index + 2) + '"]');

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
`



Bring your own styles

Style boxes any way you like. Boxes can be styled as popups or inline. You can even use :before and :after psuedo classes to add buttons, arrows, etc.


Set the order and add text/html

Add two data attributes to any element. Ride Along will glide through the stops and display the text attributes in a block element. When block is clicked, the next one is displayed until the last one is reached.
 No newline at end of file
