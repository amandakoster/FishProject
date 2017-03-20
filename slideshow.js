'use strict';
var currentSlide = 0;

function displaySlide(currentSlide, slides) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = (i === currentSlide) ? 'block' : 'none';
  }
}
document.getElementById('previous-button').addEventListener('click', function(event) {
  var slides = document.getElementsByClassName('slide');
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  displaySlide(currentSlide, slides);
}, false);
document.getElementById('next-button').addEventListener('click', function(event) {
  var slides = document.getElementsByClassName('slide');
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  displaySlide(currentSlide, slides);
}, false);
