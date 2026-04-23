import { getSections } from "../getSections.js";
import { getProjectCards } from "../projects/getProjectCards.js";

// animations for when element is in / out of viewport
export function intersectionObserver() {
  const sections       = getSections()
  const mainContent    = [ sections.projects, sections.skills, sections.footer ];
  const projects       = getProjectCards();
  const homeArrowIcon  = document.getElementById('arrow-icon') as HTMLAnchorElement;
  const projectsHeader = document.querySelector('header.projects') as HTMLHeadElement;
  const filterBtns     = document.querySelector('.filter-btns') as HTMLDivElement;
  const backToProjects = document.getElementById('back-to-projects') as HTMLDivElement;
  const skillsCard     = document.getElementById('skills-card-buttons') as HTMLDivElement;
  const elements       = [projectsHeader, filterBtns, backToProjects, skillsCard, Object.values(projects)].flat();

  // show home arrow button when sections in view
  const homeArrowInView = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        homeArrowIcon?.classList.remove('hidden');
        homeArrowIcon?.classList.add('slide-up-dark');
      } else if (!entry.isIntersecting) {
        homeArrowIcon?.classList.add('hidden');
        homeArrowIcon?.classList.remove('slide-up-dark');
      }
    })
  }
  const arrowObserver = new IntersectionObserver(homeArrowInView);
  mainContent.forEach(section => {
    if (section) { arrowObserver.observe(section) }
  })
  // window.addEventListener('scroll', () => {
  //   homeArrowIcon?.classList.add('hidden');
  //   homeArrowIcon?.classList.remove('slide-up-dark');
  // })

  // show element when in viewport
  const ElementSlideUp = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hide');
        entry.target.classList.add('slide-up');
      }
    });
  };
  const observe = (element: HTMLElement) => {
    // const options = { threshold: 0.5 };
    new IntersectionObserver(ElementSlideUp)?.observe(element);
  }
  // loop through elements and apply slideUp to each one when in viewport
  elements.forEach(el => {
    if (el) observe(el);
  })
}
