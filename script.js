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
const radioButtons = document.querySelectorAll('.radio');

const radio = {
  experience: document.getElementById('experience'),
  interests: document.getElementById('interests'),
  education: document.getElementById('education')
}

const card = {
  experience: document.getElementById('experience-card'),
  interests: document.getElementById('interests-card'),
  education: document.getElementById('education-card')
}

radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (radio.experience.checked) {
      card.experience.style.display = 'block';
      card.interests.style.display = 'none';
      card.education.style.display = 'none';
    }
    else if (radio.interests.checked) {
      card.interests.style.display = 'block';
      card.experience.style.display = 'none';
      card.education.style.display = 'none';
    }
     else if (radio.education.checked) {
      card.education.style.display = 'block';
      card.experience.style.display = 'none';
      card.interests.style.display = 'none';
    }
  })
})
