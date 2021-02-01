var slideIndex = 1;
showSlidesTop(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlidesTop(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesTop(slideIndex = n);
}

function showSlidesTop(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}