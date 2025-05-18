// canvas
let canvas = document.getElementById("banner-canvas");
let ctx = canvas.getContext("2d");

let grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "lightblue");
grd.addColorStop(1, "darkblue");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1388, 900);

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
const skillsContainer = document.querySelector('.skills-container');

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
const allCards = [card.experience, card.interests, card.education];

// icons
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

const iconGroups = {
  languages: languageIcons,
  frameworks: frameworkIcons,
  tools: toolIcons,
  databases: dbIcons
};

const allIcons = [...languageIcons, ...frameworkIcons, ...toolIcons, ...dbIcons];

aboutRadioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let selectedCard = null;

    if (radioButtons.experience.checked) {
      selectedCard = card.experience;
    } else if (radioButtons.interests.checked) {
      selectedCard = card.interests;
    } else if (radioButtons.education.checked) {
      selectedCard = card.education;
    }

    allCards.forEach((card) => {
      if (card === selectedCard) {
        card.classList.remove('hidden');
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
        card.classList.add('hidden');
      }
    });
  });
});

function clearFade() {
  Object.values(iconGroups).forEach(group => {
    group.forEach(icon => icon.classList.remove('fade'));
  });
}

skillsRadioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    clearFade();

    const selected = Object.keys(radioButtons).find(key => radioButtons[key].checked);

    Object.entries(iconGroups).forEach(([group, icons]) => {
      if (group !== selected) {
        icons.forEach(icon => icon.classList.add('fade'));
      };
    });
  });
});

// skills icons shuffle
const shuffleBtn = document.querySelector('.shuffle-btn');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleIcons() {
  clearFade();
  shuffle(allIcons);
  allIcons.forEach((icon) => skillsContainer.appendChild(icon));
}

shuffleBtn.addEventListener('click', shuffleIcons);


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
