// 3D Interactive JS

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// This initializes 360degree image viewer whe the document is ready
$(document).ready(function(){

  // selects the class '.threesixty', and assigns it to the variable $threeSixty
  // using this selector, the code can interact with any elements on the page when it has the same class 
    var $threeSixty = $('.threesixty');
  
    $threeSixty.threeSixty({
  
      // horizontal OR vertical
      // this specifies the drag direction to how the user will interact with the polygon to make it spin. It can be set to horizontal (for a more natural experience), or a vertical one
      dragDirection: 'horizontal', 
  
      // use arrow keys
      // we are also given the opportunity to utilize arrow keys to control the spin 
      useKeys: true,
  
      // is draggable?
      // allows the viewer to be draggable, and thus interactable.
      draggable: true
      
    });
  
  });
// go to next frame
// Moves to the next frame of the 360-degree image.
$threeSixty.nextFrame();


// back to previous frame
// Moves back to the previous frame
$threeSixty.prevFrame();

// This is an event handler for when the dragging starts
// triggered when the user starts dragging the image 
// more specifically, when the mouse is clicked 'DOWN'
$threeSixty.on('down', function(){
    // when user starts to drag 
  }); 
  // triggered when the user IS dragging the image
  // when the mouse is being in a state of clicked/down
  $threeSixty.on('move', function(){
    // when user is dragging
  }); 
  
  // when the mouse is detected to be unclicked (up)/ when the mouse button is released 
  $threeSixty.on('up', function(){
    // when user finishes dragging
  }); 