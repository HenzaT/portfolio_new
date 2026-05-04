import { getProjectIcons } from "./projects/getProjectIcons.js";

// dark mode
export function darkMode() {
  const projectIcons  = getProjectIcons();
  const hrLine        = document.getElementsByTagName('hr');
  const themeIcon     = document.getElementById('theme-icon') as HTMLElement;

  const groupsOf = {
    boxDiv:       document.querySelectorAll('.box'),
    filterBtns:   document.querySelectorAll('.filter'),
    projectLinks: document.querySelectorAll('.project-card__link'),
    projectImgs:  document.querySelectorAll('.splide'),
    highlighted:  document.querySelectorAll('.highlight'),
    skillsIcons:  document.querySelectorAll('.template-icon-class'),
    radioLabels:  document.querySelectorAll('.radio-label'),
    footerIcons:  document.querySelectorAll('.footer-icon'),
  };

  interface ElementTypes {
    globalHeader:  HTMLElement | null,
    langBtn:       HTMLElement | null,
    themeBtn:      HTMLElement | null,
    linkBtn:       HTMLElement | null,
    resetFilter:   HTMLElement | null,
    arrowBtn:      HTMLElement | null,
    skillsCard:    HTMLElement | null,
    skillsRadio:   HTMLElement | null,
    topRadioGroup: HTMLElement | null,
  };

  const singleElement: ElementTypes = {
    globalHeader:  document.getElementById('global-btns'),
    langBtn:       document.getElementById('lang-btn'),
    themeBtn:      document.getElementById('theme-btn'),
    linkBtn:       document.querySelector('.link-btn'),
    resetFilter:   document.getElementById('reset-filter'),
    arrowBtn:      document.getElementById('arrow-icon'),
    skillsCard:    document.querySelector('.skills-icons'),
    skillsRadio:   document.querySelector('.skills-radio'),
    topRadioGroup: document.querySelector('.top') ,
  };

  // light & dark mode toggle
  singleElement.themeBtn?.addEventListener('click', () => {
    Array.from(hrLine).forEach(line => {
      line.classList.toggle('dark');
    })
    Object.values(projectIcons).forEach(icons => {
      icons.forEach(icon => {
        icon?.classList.toggle('dark');
      })
    })
    Object.values(groupsOf).forEach(elements => {
      elements.forEach(element => {
        element?.classList.toggle('dark');
      });
    })
    Object.values(singleElement).forEach(element => {
      element?.classList.toggle('dark');
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
