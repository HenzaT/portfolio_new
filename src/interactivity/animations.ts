import { getSections } from "../getSections.js";

// initial animation on page load
export function animations() {
  const sections = getSections();

  const headerElements = {
    name:  document.getElementById('name'),
    title: document.getElementById('job-title'),
    about: document.getElementById('about-me')
  };

  const allElements = [sections.nav, Object.values(headerElements)].flat();

  window.addEventListener('DOMContentLoaded', () => {
    allElements.forEach((el, index) => {
      setTimeout(() => {
        el?.classList.remove('hidden');
        el?.classList.add('slide-up-dark');
      }, index * 500);
    })
  });
};
