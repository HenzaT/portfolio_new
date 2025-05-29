// section variables
const sections = {
  home: document.getElementById('home'),
  projects: document.getElementById('projects'),
  skills: document.getElementById('skills'),
  music: document.getElementById('music'),
  about: document.getElementById('about'),
  contact: document.getElementById('contact')
};
const sectionsNoHome: HTMLElement | null = document.querySelector('.below-content');

// section specific
const skillsIconsContainer: HTMLElement | null = document.querySelector('.skills-container');
const sectionTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.section-title');
const aboutContainer: HTMLElement | null = document.querySelector('.about-container');
const projectsContainer: HTMLElement | null = document.querySelector('.projects-container');

// nav
const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-link');
const homeNavLink: HTMLElement | null = document.getElementById('home-link');

// banner
const bannerLeft: HTMLElement | null = document.querySelector('.banner-text-left');
const bannerRight: HTMLElement | null = document.querySelector('.banner-text-right');

// projects
const projectCards: NodeListOf<HTMLElement> = document.querySelectorAll('.project-card');
const projectImages: NodeListOf<HTMLElement> = document.querySelectorAll('.project-image');
const projectOverlays: NodeListOf<HTMLElement> = document.querySelectorAll('.project-card-overlay');

// skills
const skillsCardButtons: HTMLElement | null = document.getElementById('skills-card-button');

// music
const allAlbums: HTMLElement | null = document.querySelector('.all-albums');
const albumCards: NodeListOf<HTMLElement> = document.querySelectorAll('.album-card');
const albumImages: NodeListOf<HTMLElement> = document.querySelectorAll('.album-art');
const albumOverlays: NodeListOf<HTMLElement> = document.querySelectorAll('.album-card-overlay');
const musicCard: HTMLElement | null = document.querySelector('.music-card');

const projectAlbumMusicSkillsCards = [...projectCards, ...albumCards, musicCard, skillsIconsContainer]

// radio buttons
const skillsRadioButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.skills-radio');

interface RadioButtons {
  languages: HTMLInputElement
  frameworks: HTMLInputElement
  tools: HTMLInputElement
  databases: HTMLInputElement
}

const radioButtons: RadioButtons = {
  languages: document.getElementById('languages') as HTMLInputElement,
  frameworks: document.getElementById('frameworks') as HTMLInputElement,
  tools: document.getElementById('tools') as HTMLInputElement,
  databases: document.getElementById('databases') as HTMLInputElement
};

// cards
const card = {
  interests: document.getElementById('interests-card'),
  experience: document.getElementById('experience-card'),
  education: document.getElementById('education-card'),
  music: document.querySelector('.music-card')
};

const allCards = [card.interests, card.experience, card.education];

const aboutInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.about-info');

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

// home arrow to top
const homeArrow: HTMLElement | null = document.querySelector('.home-arrow');
const homeArrowIcon: HTMLElement | null = document.getElementById('arrow-icon');
// about chevron
const chevron: HTMLElement | null = document.querySelector('.about-chevron');
// plus button
const plusButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.plus');
const musicPlusButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.music-plus');

// Desktop screen size
const desktopScreen = window.matchMedia("(min-width: 1210px)");

// on page load
function animationMediaQuery(media: MediaQueryList) {
  if (media.matches) {
    bannerLeft?.classList.add('slide-right');
    bannerRight?.classList.add('slide-left');
  } else {
    bannerLeft?.classList.add('slide-right-center');
    bannerRight?.classList.add('slide-left-center');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  animationMediaQuery(desktopScreen);
  chevron?.classList.add('slide-up-dark');
});

// intersection observer - element IN viewport

// show home arrow button when sections in view
function homeArrowInView(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    if (!homeArrow) return;
    if (entry.isIntersecting) {
      homeArrow.classList.remove('hidden');
      homeArrow.classList.add('slide-up-dark');
    } else if (!entry.isIntersecting) {
      homeArrow.classList.add('hidden');
      homeArrow.classList.remove('slide-up-dark');
    }
  })
}

const arrowObserver = new IntersectionObserver(homeArrowInView);
if (sectionsNoHome) arrowObserver.observe(sectionsNoHome);

// highlight nav when each section is in viewport
function sectionViewChangeNav(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;

      navLinks.forEach((link) => {
        const linkTarget = link.getAttribute('href')?.substring(1);
        if (linkTarget === sectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
};

const sectionObserver = new IntersectionObserver(sectionViewChangeNav, {
  threshold: 0.3
});

Object.entries(sections).forEach(([name, section]) => {
  if (section) {
    sectionObserver.observe(section);
  } else {
    console.warn(`Section "${name}" not found in the DOM.`);
  }
});

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
if (allAlbums) allAlbumsObserver.observe(allAlbums);
if (card.music) musicCardObserver.observe(card.music);

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

const middleAboutCard = new IntersectionObserver(ElementSlideUpExpand)
if (card.experience) middleAboutCard.observe(card.experience);

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

const leftAndRightAboutCard = new IntersectionObserver(ElementSlideUpFade)
if (card.education && card.interests) {
  leftAndRightAboutCard.observe(card.education);
  leftAndRightAboutCard.observe(card.interests);
}

// intersection observer - element OUT of viewport
// clear skills container
function clear(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry)=> {
    if (!entry.isIntersecting) {
      clearFadeExpand()
    }
  })
};

const skillsObserver = new IntersectionObserver(clear);
if (skillsIconsContainer) skillsObserver.observe(skillsIconsContainer);

// navbar select
function navLinkClick(link: HTMLElement): void {
  document.querySelector('.nav-link.active')?.classList.remove('active');
  link.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinkClick(link);
  });
});

if (homeArrowIcon) {
  homeArrowIcon.addEventListener('click', () => {
    if (!homeNavLink) return;
    navLinkClick(homeNavLink);
  });
}
homeNavLink?.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

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

// about cards toggle
allCards.forEach((card) => {
  if (!card) return
  card.addEventListener('click', () => {
    allCards.forEach((active) => {
      active?.classList.remove('expand');
      active?.classList.add('fade');
    })
    scrollToView(card);
    card.classList.add('expand');
    card.classList.remove('fade');
  })
});

// plus toggle to show more info
function toggleClassBySelector(selector: string, className: string, id: string): void {
  const element = document.querySelector(`${selector}[data-id="${id}"]`);
  if (!element) return;
  element.classList.toggle(className);
}

function openOverlay(button: HTMLElement): void {
  const id = button.dataset.id;
  if (!id) return;
  button.classList.toggle('rotate');
  toggleClassBySelector('.project-card-overlay', 'show', id);
  toggleClassBySelector('.project-image', 'darken', id);
  toggleClassBySelector('.album-card-overlay', 'show', id);
  toggleClassBySelector('.album-art', 'darken', id);
};

// projects plus toggle to show info
plusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openOverlay(button);
  });
});

// music plus toggle to show iFrame
musicPlusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openOverlay(button);
  });
});

// skills icons toggle
function clearFadeExpand(): void {
  Object.values(iconGroups).forEach(group => {
    group.forEach((icon) => {
      if (!icon) return;
      icon.classList.remove('fade');
      icon.classList.remove('expand');
    });
  });
};

skillsRadioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    clearFadeExpand();
    const selected = (Object.keys(radioButtons) as Array<keyof RadioButtons>)
    .find(buttonName => radioButtons[buttonName]?.checked);
    Object.entries(iconGroups).forEach(([group, icons]) => {
      if (group !== selected) {
        icons.forEach((icon) => {
          if (icon) {
            icon.classList.add('fade')
          }
        });
      } else if (group === selected) {
        icons.forEach((icon) => {
          if (icon) {
            icon.classList.add('expand')
          }
        });
      };
    });
  });
});
