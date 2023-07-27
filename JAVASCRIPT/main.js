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


/* Faqs Section functionality started */ 
function toggleAnswer(questionId) {
  var answer = document.getElementById('answer' + questionId);
  var arrow = document.querySelector('.question:nth-child(' + questionId + ') .arrow');
  
  if (answer.style.display === 'none') {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(-135deg)';
  } else {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(-45deg)';
  }
}

/* Faqs Section functionality Ended */ 