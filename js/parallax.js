// Parallax JS

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Here we apply parallax using the attribute data-speed

// We begin by associating a function for each of the elements we want to affect.
// the first part "$(.img-parallax') is a JQuery selector that selects all elements with the class ".img-parallax".
// the ".each(function () {" is a method that occurs over each element in the set 
// For each element, the function inside 'each' will be executed
$('.img-parallax').each(function () {
  // "$(this)" refers to the current element being iterated over in the '.each' loop
  // it's also wrapped in a JQuery object and stored in the variable 'img'
    let img = $(this);
    // selects the parent element of the current ".img-parallax" element
    // stored in the variable imgParent
    let imgParent = $(this).parent();
    // defining the function parallaxIMG
      // contains the information to perform the parallax effect
    function parallaxImg() {
  
      // Typical structure of object oriented programing is to define early on, a series of variables (data required to complete the task)    
      var speed = img.data('speed');
      // .data method retireves the data-speed= attribute in html.
      var imgY = imgParent.offset().top;
      // offset means how far from origin
      // offset  can also be offset top, bottom, etc.  
      var winY = $(this).scrollTop();
      // hardest command to learn in JS
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();
  
  
      // Value stored (Viewport window bottom) to determine when to show the next image (crop)
      // Each display image is referred to as an image tile.    
      var winBottom = winY + winH;
      console.log(winBottom);
  
      // If the bottom of the screen is taller than the image and distance from the top is less than the height.
      // if the winbottom is greater than img y AND win Y is less than the img Y and parentH, the whole code executes
      if (winBottom > imgY && winY < imgY + parentH) {
        // Recalculate the actual display area as the image heigh minus its distance from top and multiply that by the speed value (english translation tall images must move more quickly)
        var imgBottom = ((winBottom - imgY) * speed);
        // Store and calculate the crop area (less than the height of hte image) before it dissapears from view
        var imgTop = winH + parentH;
        // Final calculation of percentage difference of next image coverage.
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      // Apply the css for the visual application of this mathmatical calculation
      // method of JS: object.css();
      // allows us to apply css dynamically to the page
      // "allows for dyanmic application of css to an object on the page"
      img.css({
        // defines the vertical positioning of an element 
        // concatenates imgPercent with % 
        top: imgPercent + '%',
        // transform lets us apply an effect to the element
        // allows us to horizontally position the image and move it vertically upward by the concatenated imgPercent percent
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
        // jQuery event similar to our previous example of JavaScript window.onload in that we employ this event to initialize the code written above.
        $(document).on({
          // scroll is the event that it is listening to
          // function () {parallaxImg(); is a callback function that occurs whenever scroll occurs
          scroll: function () {
            parallaxImg();
            // ready is the event name for when the DOM is loaded and ready to be executed
            // similary to above, the function part is a callback that occurs when the document is ready to go
          }, ready: function () {
            parallaxImg();
          }
        });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  