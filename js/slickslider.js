// Gallery Slider

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Super Secret Fun
// Gallery Slider

// this part waits to make sure that the html is ready before its ready for scripts to be ran
$(document).ready(function () {
    // initializes the slick carousel on the element ".container-gallery__images"
    $('.container-gallery__images').slick({
        // makes it so that 3 slides are shown at once 
        slidesToShow: 3, // Number of slides to show at once
        // how many scrolls are done at once (only one)
        slidesToScroll: 1, // Number of slides to scroll at once
        // enables automatic sliding
        autoplay: true, // Enable automatic sliding
        // speed of the autoplay, in this case its defaulted to 2000milliseconds
        // we can reduce the number to make it go faster
        autoplaySpeed: 200, // Speed of the autoplay in milliseconds
        // this allows us to show the dots on the page to allow users to see their positioning within the slide gallery
        dots: true, // Show dots for navigation
        arrows: true, // Show arrows for navigation
        // centers the current slide and "splits" the other slides that are on the side
        centerMode: true,
        // defines the breakpoints of the slider to make it responsive for various sizings
        responsive: [
            {
                // such as a resolution for 1024
                breakpoint: 1024,
                settings: {
                    // number of slides to show
                    slidesToShow: 3,
                    // Number of slides it takes to scroll: 1
                    slidesToScroll: 1,
                    // enables infinite scrolling
                    infinite: true,
                    // and dots for navigation
                    dots: true

                    // most of these values are also present in these other breakpoints, but at different values to, once again, make it resposive to the specified size
                }
            },
            {
            // one for 768
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                // and 480
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
