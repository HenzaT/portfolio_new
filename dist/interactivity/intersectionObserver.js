import { getSections } from "../getSections.js";
import { getProjectCards } from "../projects/getProjectCards.js";
// animations for when element is in / out of viewport
export function intersectionObserver() {
    const sections = getSections();
    const projects = getProjectCards();
    const homeArrowIcon = document.getElementById('arrow-icon');
    const projectsHeader = document.querySelector('header.projects');
    const skillsHeader = document.getElementById('skills-header');
    const filterBtns = document.querySelector('.filter-btns');
    const backToProjects = document.getElementById('back-to-projects');
    const skillsCard = document.getElementById('skills-card-buttons');
    const elements = [projectsHeader, skillsHeader, filterBtns, backToProjects, skillsCard, Object.values(projects)].flat();
    // show home arrow button when sections in view
    const homeArrowInView = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                homeArrowIcon?.classList.remove('hidden');
                homeArrowIcon?.classList.add('slide-up-dark');
            }
            else if (!entry.isIntersecting) {
                homeArrowIcon?.classList.add('hidden');
                homeArrowIcon?.classList.remove('slide-up-dark');
            }
        });
    };
    const arrowObserver = new IntersectionObserver(homeArrowInView);
    [sections.skills, sections.projects, sections.footer].forEach(section => {
        if (section)
            arrowObserver.observe(section);
    });
    const onScroll = (ev) => {
        window.addEventListener(ev, () => {
            if (ev === 'scroll') {
                homeArrowIcon?.classList.add('hidden');
                homeArrowIcon?.classList.remove('slide-up-dark');
            }
            else {
                homeArrowIcon?.classList.remove('hidden');
                homeArrowIcon?.classList.add('slide-up-dark');
            }
        });
    };
    onScroll('scroll');
    onScroll('scrollend');
    // show element when in viewport
    const ElementSlideUp = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hide');
                entry.target.classList.add('slide-up');
            }
        });
    };
    // const options = {
    //   threshold: 0.5,
    // };
    const observer = new IntersectionObserver(ElementSlideUp);
    // loop through elements and apply slideUp to each one when in viewport
    elements.forEach(el => {
        if (el)
            observer.observe(el);
    });
}
