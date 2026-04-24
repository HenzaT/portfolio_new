import { getProjectIcons } from "./projects/getProjectIcons.js";

// dark mode
export function darkMode() {
  const projectIcons  = getProjectIcons();
  const hrLine        = document.getElementsByTagName('hr');
  const boxDiv        = document.querySelectorAll('.box');
  const filterBtns    = document.querySelectorAll('.filter');
  const projectLinks  = document.querySelectorAll('.project-card__link');
  const projectImgs   = document.querySelectorAll('.splide');
  const highlighted   = document.querySelectorAll('.highlight');
  const radioLabels   = document.querySelectorAll('.radio-label');
  const footerIcons   = document.querySelectorAll('.footer-icon');

  const globalHeader  = document.getElementById('global-btns') as HTMLHeadElement;
  const themeBtn      = document.getElementById('theme-btn') as HTMLButtonElement;
  const themeIcon     = document.getElementById('theme-icon') as HTMLElement;
  const langBtn       = document.getElementById('lang-btn') as HTMLButtonElement;
  const linkBtn       = document.querySelector('.link-btn') as HTMLButtonElement;
  const arrowBtn      = document.getElementById('arrow-icon') as HTMLAnchorElement;
  const skillsCard    = document.querySelector('.skills-icons') as HTMLDivElement;
  const skillsRadio   = document.querySelector('.skills-radio') as HTMLDivElement;
  const topRadioGroup = document.querySelector('.top') as HTMLDivElement;
  const resetFilter   = document.getElementById('reset-filter') as HTMLButtonElement;
  const elements      = [globalHeader, themeBtn, langBtn, arrowBtn, skillsCard, skillsRadio, resetFilter, linkBtn, topRadioGroup];

  const elementsList = (elements: NodeListOf<Element>) => {
    elements.forEach(el => {
      el.classList.toggle('dark');
    })
  };

  // light & dark mode toggle
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      elements.forEach(el => {
        el.classList.toggle('dark');
      })
      Array.from(hrLine).forEach(line => {
        line.classList.toggle('dark');
      })
      Object.values(projectIcons).forEach(icons => {
        icons.forEach(icon => {
          icon?.classList.toggle('dark');
        })
      })
      elementsList(highlighted);
      elementsList(filterBtns);
      elementsList(boxDiv);
      elementsList(projectLinks);
      elementsList(projectImgs);
      elementsList(radioLabels);
      elementsList(footerIcons);

      if (themeIcon.className === 'fa-solid fa-moon') {
        themeIcon.className = 'fa-solid fa-sun';
        document.body.className = 'dark';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
        document.body.className = 'light';
      }
    });
  }
}
