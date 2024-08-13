// JS for Drag and Drop Interactive Tier List

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// We first initialize the dragsort list for the unorder UL list 
$("ul").dragsort({ 
  // this specifies the list items (li) within the list , making it draggable 
    dragSelector: "li", 
    // defines a "palceHolderTemplate" to show where an item will be dropped into
    placeHolderTemplate: "<li></li>" 
  });
  // This initializes "dragsort" for the table body (tbody)
  $("tbody").dragsort({ 
    // specifies that the tables (tr) should be draggable and interactable
    dragSelector: "tr", 
    // defines where the row will be 
    placeHolderTemplate: "<tr></tr>" 
  });
  // initializes "dragsort" to have other options such as 
  $("tbody").dragsort({ 

    // item selector
    // normally used to specify which items to drag
    itemSelector: "",
  
    // selector of drag handle
    // specifies handle to which items are draggable 
    dragSelector: "",
  
    // exclude elements
    // excludes elements like input fields or text areas to be dragged
    dragSelectorExclude: "input, textarea",
  
    // callback function
    // function to run after dragging is done
    // currently its empty
    dragEnd: function() { },
  
    // allows you to drag items between lists
    // false means its not allowed 
    dragBetween: false,
  
    // placeholder template
    // placeholder template when items are being dragged
    placeHolderTemplate: "",
  
    // scroll container
    // container that will scroll if dragging near the edges, but it currently defaults to the window
    scrollContainer: window,
  
    // animation speed
    // the speed of which the window goes when holding an item and dragging it
    // initial speed was 5 (fast), but is changeable for a faster or smoother experience
    scrollSpeed: 4,
  
  });