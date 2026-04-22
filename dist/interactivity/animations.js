import { getSections } from "../getSections.js";
import { getProjectCards } from "../projects/getProjectCards.js";
export function animations() {
    const sections = getSections();
    const projects = getProjectCards();
    const headerElements = {
        name: document.getElementById('name'),
        title: document.getElementById('job-title'),
        about: document.getElementById('about-me')
    };
    const projectElements = {
        header: document.querySelector('header.projects'),
        filterBtns: document.querySelector('.filter-btns'),
    };
    const skillsElements = {
        header: document.getElementById('skills-header'),
    };
    const allElements = [
        sections.nav,
        Object.values(headerElements),
        Object.values(projectElements),
        Object.values(skillsElements),
        // Object.values(projects),
    ].flat();
    const addSlideUpDark = (element) => {
        element.classList.remove('hidden');
        element.classList.add('slide-up-dark');
    };
    window.addEventListener('DOMContentLoaded', () => {
        allElements.forEach((el, index) => {
            if (el) {
                setTimeout(() => {
                    addSlideUpDark(el);
                }, index * 500);
            }
        });
    });
}
