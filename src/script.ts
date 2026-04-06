// @ts-ignore
import Splide from "../node_modules/@splidejs/splide/dist/js/splide.esm.js";
import { projectCards } from "./projects/projects.js";
import { projectsFilter } from "./projects/projectsFilter.js";
import { skills } from "./skills/skills.js";
import { skillsToggle } from "./skills/skillsToggle.js";

document.addEventListener('DOMContentLoaded', () => {
  projectCards();
  projectsFilter();
  skills();
  skillsToggle();

  const spliders: string[] = [
    '#therapy-slider',
    '#song-slider',
    '#weather-slider',
    '#portfolio-slider',
    '#aptist-slider',
    '#country-slider',
    '#kanji-slider',
  ];

  spliders.forEach(splide => {
    if (document.querySelector(splide)) {
      new Splide(splide).mount();
    } else {
      console.warn(`Splider skipped: ${splide}`);
    }
  })
});

// section variables
const sections = {
  nav:      document.getElementById('nav'),
  header:   document.getElementById('main-header'),
  projects: document.getElementById('projects'),
  skills:   document.getElementById('skills'),
  footer:   document.getElementById('footer'),
};
const sectionsNoHome: HTMLElement | null = document.querySelector('.below-content');

// section specific
const skillsIconsContainer: HTMLElement | null = document.querySelector('.skills-container');
const aboutContainer: HTMLElement | null = document.querySelector('.about-container');
const projectsContainer: HTMLElement | null = document.querySelector('.projects-container');
const sectionTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.section-title');

// skills
const skillsCardButtons: HTMLElement | null = document.getElementById('skills-card-button');

const copyBtn = document.getElementById('copy-btn') as HTMLButtonElement;
const copyIcon = document.getElementById('copy-icon') as HTMLElement;
const emailAddress = document.getElementById('email-address') as HTMLAnchorElement;

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const emailText = emailAddress.textContent;
    if (copyIcon.className === 'fa-regular fa-copy') {
      copyIcon.className = 'fa-solid fa-check';
      emailAddress.textContent = 'email copied';
      copyBtn.setAttribute('disabled', '');
      emailAddress.style.pointerEvents = 'none';
    }
    setTimeout(() => {
      copyIcon.className = 'fa-regular fa-copy';
      emailAddress.textContent = 'henrykun95@gmail.com'
      copyBtn.removeAttribute('disabled');
      emailAddress.style.pointerEvents = 'auto';
    }, 2000);
    navigator.clipboard.writeText(emailText);
  })
}

const projectAlbumMusicSkillsCards = [skillsIconsContainer]

const themeBtn      = document.getElementById('theme-btn') as HTMLButtonElement;
const themeIcon     = document.getElementById('theme-icon') as HTMLElement;
const langBtn       = document.getElementById('lang-btn') as HTMLButtonElement;
const arrowBtn      = document.getElementById('arrow-icon') as HTMLAnchorElement;
const hrLine        = document.getElementsByTagName('hr');
const projectLinks  = document.querySelectorAll('.project-card__link');
const projectImgs   = document.querySelectorAll('.splide');
const skillsCard    = document.querySelector('.skills-icons') as HTMLDivElement;
const skillsRadio   = document.querySelector('.skills-radio') as HTMLDivElement;
const highlighted   = document.querySelectorAll('.highlight');

const elements = [ themeBtn, langBtn, arrowBtn, skillsCard, skillsRadio ];

// const manyElements = (elements: NodeListOf<Element>, el: Element ) => {
//   elements.forEach(el => {
//     el.classList.toggle('dark');
//   })
// };

// light & dark mode toggle
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    elements.forEach(el => {
      el.classList.toggle('dark');
    })
    Array.from(hrLine).forEach(line => {
      line.classList.toggle('dark');
    })
    highlighted.forEach(word => {
      word.classList.toggle('dark');
    })
    projectLinks.forEach(link => {
      link.classList.toggle('dark');
    })
    projectImgs.forEach(img => {
      img.classList.toggle('dark');
    })

    if (themeIcon.className === 'fa-solid fa-moon') {
      themeIcon.className = 'fa-solid fa-sun';
      document.body.className = 'dark';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      document.body.className = 'light';
    }
  });
}

// language toggle
if (langBtn) {
  langBtn.addEventListener('click', () => {
    let htmlLang = document.documentElement;
    htmlLang.getAttribute('lang') === 'ja' ? htmlLang.setAttribute('lang', 'en') : htmlLang.setAttribute('lang', 'ja');
    document.body.classList.toggle('ja-mode');
    langBtn.textContent = langBtn.textContent === '日本語' ? 'English' : '日本語';
  })
}

const aboutInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.about-info');

// home arrow to top
const homeArrowIcon: HTMLElement | null = document.getElementById('arrow-icon');
// about chevron
const chevron: HTMLElement | null = document.getElementById('top-chevron');
const mobileChevrons: NodeListOf<HTMLElement> = document.querySelectorAll('#mobile-chevron');

// screen size
const desktopScreen = window.matchMedia("(min-width: 1210px)");
const mobileScreen = window.matchMedia("(max-width: 600px");

// on page load
function animationMediaQuery(media: MediaQueryList) {
  if (media.matches) {
    // bannerLeft?.classList.add('slide-right');
    // bannerRight?.classList.add('slide-left');
  } else {
    // bannerLeft?.classList.add('slide-right-center');
    // bannerRight?.classList.add('slide-left-center');
  }
};

function addSlideUpDark(element: HTMLElement) {
  element.classList.add('slide-up-dark');
}

window.addEventListener('DOMContentLoaded', () => {
  animationMediaQuery(desktopScreen);
  if (!chevron) return
  addSlideUpDark(chevron);
});

// intersection observer - element IN viewport

// show home arrow button when sections in view
function homeArrowInView(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    if (!homeArrowIcon) return;
    if (entry.isIntersecting) {
      homeArrowIcon.classList.remove('hidden');
      homeArrowIcon.classList.add('slide-up-dark');
    } else if (!entry.isIntersecting) {
      homeArrowIcon.classList.add('hidden');
      homeArrowIcon.classList.remove('slide-up-dark');
    }
  })
}

const arrowObserver = new IntersectionObserver(homeArrowInView);
if (sectionsNoHome) arrowObserver.observe(sectionsNoHome);

// element in view slide up
function ElementSlideUp(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    // does to section title
    if (entry.isIntersecting) {
      entry.target.classList.remove('hide');
      entry.target.classList.add('slide-up');
    }
  });
};

const titleObserver = new IntersectionObserver(ElementSlideUp);
const projectObserver = new IntersectionObserver(ElementSlideUp);
const skillsButtonsObserver = new IntersectionObserver(ElementSlideUp);
const allAlbumsObserver = new IntersectionObserver(ElementSlideUp);
const musicCardObserver = new IntersectionObserver(ElementSlideUp);

sectionTitles.forEach((section) => {
  if (section) {
    titleObserver.observe(section);
  }
});
if (projectsContainer) projectObserver.observe(projectsContainer);
if (skillsCardButtons) skillsButtonsObserver.observe(skillsCardButtons);

// about card slide up if expanded
function ElementSlideUpExpand(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    // does to section title
    if (entry.isIntersecting) {
      entry.target.classList.remove('hide');
      entry.target.classList.add('slide-up-expand');
    }
  });
};

// about card slide up if faded
function ElementSlideUpFade(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    // does to section title
    if (entry.isIntersecting) {
      entry.target.classList.remove('hide');
      entry.target.classList.add('slide-up-fade');
    }
  });
};

// mobile chevrons slide up when in viewport
function ElementSlideUpDark(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    // does to section title
    if (entry.isIntersecting) {
      entry.target.classList.remove('hide');
      entry.target.classList.add('slide-up-dark');
    }
  });
};

const mobileChevronObserver = new IntersectionObserver(ElementSlideUpDark);
mobileChevrons.forEach((chevron) => {
  if (chevron) {
    mobileChevronObserver.observe(chevron);
  }
});

// intersection observer - element OUT of viewport
// clear skills container
function clear(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry)=> {
    if (!entry.isIntersecting) {
      // clearFadeExpand()
    }
  })
};

const skillsObserver = new IntersectionObserver(clear);
if (skillsIconsContainer) skillsObserver.observe(skillsIconsContainer);

// if (homeArrowIcon) {
//   homeArrowIcon.addEventListener('click', () => {
//     if (!homeNavLink) return;
//     navLinkClick(homeNavLink);
//   });
// }
// homeNavLink?.addEventListener('click', (event) => {
//   event.preventDefault();
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

// scroll into view
function scrollToView(element: HTMLElement) {
  if (!element) return
    element.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
}

projectAlbumMusicSkillsCards.forEach((card) => {
  if (!card) return
  card.addEventListener('click', () => {
    scrollToView(card);
  })
})
