// canvas
// let canvas = document.getElementById("banner-canvas");
// let ctx = canvas.getContext("2d");

// let grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "lightblue");
// grd.addColorStop(1, "darkblue");

// ctx.fillStyle = grd;
// ctx.fillRect(0, 0, 1388, 900);

// intersection observer - elements IN viewport
function widenBar(entries){
  entries.map((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('widen');
    }
  })
};

const barObserver = new IntersectionObserver(widenBar);

let dividingBars = document.querySelectorAll('.dividing-bar');
dividingBars.forEach(bar => {
  if (bar) {
    barObserver.observe(bar);
  }
});

// intersection observer - element OUT of viewport
function clear(entries){
  entries.map((entry)=> {
    if (!entry.isIntersecting) {
      clearFadeExpand()
      skillsRadioButtons.forEach(button => {
        button.removeAttribute('checked');
      });
    }
  })
};

const skillsObserver = new IntersectionObserver(clear);

let skills = document.querySelector('.skills-container');
skillsObserver.observe(skills);

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

// icons
const languageIcons = [
  document.getElementById('ruby'),
  document.getElementById('js'),
  document.getElementById('ts')
];

const frameworkIcons = [
  document.getElementById('rails'),
  document.getElementById('bootstrap')
];

const toolIcons = [
  document.getElementById('git'),
  document.getElementById('github'),
  document.getElementById('heroku'),
  document.getElementById('html'),
  document.getElementById('css'),
  document.getElementById('sass')
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

function clearFadeExpand() {
  Object.values(iconGroups).forEach(group => {
    group.forEach((icon) => {
      icon.classList.remove('fade');
      icon.classList.remove('expand');
    });
  });
};

skillsRadioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    clearFadeExpand();

    const selected = Object.keys(radioButtons).find(buttonName => radioButtons[buttonName].checked);

    Object.entries(iconGroups).forEach(([group, icons]) => {
      if (group !== selected) {
        icons.forEach((icon) => icon.classList.add('fade'));
      } if (group === selected) {
        icons.forEach((icon) => icon.classList.add('expand'));
      }
    });
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
