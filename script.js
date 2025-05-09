// navbar select
document.addEventListener('DOMContentLoaded', selectLink);

function selectLink() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // remove 'active' from each link
      navLinks.forEach(l => l.classList.remove('active'));
      // add only to one link
      link.classList.add('active');
    });
  });
};

// projects slide
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const slides = document.querySelectorAll(".slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// about toggle
const expRadio = document.getElementById('experience');
const intRadio = document.getElementById('interests');
const expCard = document.getElementById('experience-card');
const intCard = document.getElementById('interests-card');
const radioButtons = document.querySelectorAll('.radio');

radioButtons.forEach((radio) => {
  radio.addEventListener('click', () => {
    if (expRadio.checked) {
      expCard.style.display = 'block';
      intCard.style.display = 'none';
    }
    else if (intRadio.checked) {
      intCard.style.display = 'block';
      expCard.style.display = 'none';
    }
  })
})
