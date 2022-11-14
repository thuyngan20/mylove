var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  debugger
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }


  dots[slideIndex - 1].className += " active";
  slides[slideIndex - 1].style.display = "block";
}

document.getElementsByClassName("dot")[0].onclick();
