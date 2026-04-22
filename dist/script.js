// @ts-ignore
import { imgSliderSplide } from "./imgSliderSplide.js";
import { darkMode } from "./darkMode.js";
import { toggleLang } from "./toggleLang.js";
import { animations } from "./interactivity/animations.js";
import { scrollToView } from "./interactivity/scrollTo.js";
import { intersectionObserver } from "./interactivity/intersectionObserver.js";
import { projectCards } from "./projects/projects.js";
import { projectsFilter } from "./projects/projectsFilter.js";
import { skills } from "./skills/skills.js";
import { skillsToggle } from "./skills/skillsToggle.js";
import { footer } from "./footer.js";
document.addEventListener('DOMContentLoaded', () => {
    animations();
    intersectionObserver();
    projectCards();
    projectsFilter();
    skills();
    skillsToggle();
    scrollToView();
    footer();
    imgSliderSplide();
    darkMode();
    toggleLang();
});
// section specific
const skillsIconsContainer = document.querySelector('.skills-container');
const projectsContainer = document.querySelector('.projects-container');
const sectionTitles = document.querySelectorAll('.section-title');
// skills
const skillsCardButtons = document.getElementById('skills-card-button');
// screen size
const desktopScreen = window.matchMedia("(min-width: 1210px)");
const mobileScreen = window.matchMedia("(max-width: 600px");
// on page load
function animationMediaQuery(media) {
    if (media.matches) {
        // bannerLeft?.classList.add('slide-right');
        // bannerRight?.classList.add('slide-left');
    }
    else {
        // bannerLeft?.classList.add('slide-right-center');
        // bannerRight?.classList.add('slide-left-center');
    }
}
;
// element in view slide up
function ElementSlideUp(entries) {
    entries.forEach((entry) => {
        // does to section title
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide');
            entry.target.classList.add('slide-up');
        }
    });
}
;
const titleObserver = new IntersectionObserver(ElementSlideUp);
const projectObserver = new IntersectionObserver(ElementSlideUp);
const skillsButtonsObserver = new IntersectionObserver(ElementSlideUp);
sectionTitles.forEach((section) => {
    if (section) {
        titleObserver.observe(section);
    }
});
if (projectsContainer)
    projectObserver.observe(projectsContainer);
if (skillsCardButtons)
    skillsButtonsObserver.observe(skillsCardButtons);
// about card slide up if expanded
function ElementSlideUpExpand(entries) {
    entries.forEach((entry) => {
        // does to section title
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide');
            entry.target.classList.add('slide-up-expand');
        }
    });
}
;
// about card slide up if faded
function ElementSlideUpFade(entries) {
    entries.forEach((entry) => {
        // does to section title
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide');
            entry.target.classList.add('slide-up-fade');
        }
    });
}
;
// mobile chevrons slide up when in viewport
function ElementSlideUpDark(entries) {
    entries.forEach((entry) => {
        // does to section title
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide');
            entry.target.classList.add('slide-up-dark');
        }
    });
}
;
// const mobileChevronObserver = new IntersectionObserver(ElementSlideUpDark);
// mobileChevrons.forEach((chevron) => {
//   if (chevron) {
//     mobileChevronObserver.observe(chevron);
//   }
// });
// intersection observer - element OUT of viewport
// clear skills container
function clear(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            // clearFadeExpand()
        }
    });
}
;
const skillsObserver = new IntersectionObserver(clear);
if (skillsIconsContainer)
    skillsObserver.observe(skillsIconsContainer);
