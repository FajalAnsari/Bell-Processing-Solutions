document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carousel'), 
    {
      interval: 3000, 
      wrap: true // Set to false if you want the carousel to stop at the last slide
    });
  });