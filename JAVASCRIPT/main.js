document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carousel'), 
    {
      interval: 3000, 
      wrap: true // Set to false if you want the carousel to stop at the last slide
    });
  });

//Typing animation for the sliders text
var i = 0;
var txt = 'A Leader in the Credit Card Processing Industry ';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//Typing animation for the sliders text