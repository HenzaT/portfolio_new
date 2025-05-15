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

// about and skills toggle
const aboutRadioButtons = document.querySelectorAll('.radio');
const skillsRadioButtons = document.querySelectorAll('.skills-radio');

const radioButtons = {
  experience: document.getElementById('experience'),
  interests: document.getElementById('interests'),
  education: document.getElementById('education'),
  languages: document.getElementById('languages'),
  frameworks: document.getElementById('frameworks'),
  tools: document.getElementById('tools'),
  databases: document.getElementById('databases')
};

const card = {
  experience: document.getElementById('experience-card'),
  interests: document.getElementById('interests-card'),
  education: document.getElementById('education-card')
};

const languageIcons = [
  document.getElementById('ruby'),
  document.getElementById('js'),
  document.getElementById('html'),
  document.getElementById('css'),
  document.getElementById('ts')
];

const frameworkIcons = [
  document.getElementById('rails'),
  document.getElementById('bootstrap'),
];

const toolIcons = [
  document.getElementById('git'),
  document.getElementById('github'),
  document.getElementById('heroku'),
];

const dbIcons = [
  document.getElementById('postgres')
];


aboutRadioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (radioButtons.experience.checked) {
      card.experience.style.display = 'block';
      card.interests.style.display = 'none';
      card.education.style.display = 'none';
    }
    else if (radioButtons.interests.checked) {
      card.interests.style.display = 'block';
      card.experience.style.display = 'none';
      card.education.style.display = 'none';
    }
     else if (radioButtons.education.checked) {
      card.education.style.display = 'block';
      card.experience.style.display = 'none';
      card.interests.style.display = 'none';
    }
  })
})

function clearFade() {
  [...languageIcons, ...frameworkIcons, ...toolIcons, ...dbIcons].forEach((icon) => icon.classList.remove('fade'));
}

skillsRadioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    clearFade();
    if (radioButtons.languages.checked) {
      frameworkIcons.forEach((icon) => icon.classList.add('fade'));
      toolIcons.forEach((icon) => icon.classList.add('fade'));
      dbIcons.forEach((icon) => icon.classList.add('fade'));
    } else if (radioButtons.frameworks.checked) {
      languageIcons.forEach((icon) => icon.classList.add('fade'));
      toolIcons.forEach((icon) => icon.classList.add('fade'));
      dbIcons.forEach((icon) => icon.classList.add('fade'));
    } else if (radioButtons.tools.checked) {
      languageIcons.forEach((icon) => icon.classList.add('fade'));
      frameworkIcons.forEach((icon) => icon.classList.add('fade'));
      dbIcons.forEach((icon) => icon.classList.add('fade'));
    } else if (radioButtons.databases.checked) {
      languageIcons.forEach((icon) => icon.classList.add('fade'));
      frameworkIcons.forEach((icon) => icon.classList.add('fade'));
      toolIcons.forEach((icon) => icon.classList.add('fade'));
    }
  });
});

// petal moving
const interval = setInterval(movePetal(), 1000);

function movePetal() {
  let petal = document.querySelector('.petal');
  petal.style.top = petal.offsetTop + 1 + "px";
  petal.style.left = petal.offsetLeft + 1 + "px";
};

// music album flip
const albumCards = document.querySelectorAll(".flip-album");

function flipCard() {
  this.classList.toggle("flip");
}

albumCards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
