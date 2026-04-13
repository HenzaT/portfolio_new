// @ts-ignore
import { imgSliderSplide } from "./imgSliderSplide.js";
import { darkMode } from "./darkMode.js";
import { projectCards } from "./projects/projects.js";
import { projectsFilter } from "./projects/projectsFilter.js";
import { skills } from "./skills/skills.js";
import { skillsToggle } from "./skills/skillsToggle.js";
import { footer } from "./footer.js";
document.addEventListener('DOMContentLoaded', () => {
    darkMode();
    projectCards();
    projectsFilter();
    skills();
    skillsToggle();
    footer();
    imgSliderSplide();
});
// section variables
const sections = {
    nav: document.getElementById('nav'),
    header: document.getElementById('main-header'),
    projects: document.getElementById('projects'),
    skills: document.getElementById('skills'),
    footer: document.getElementById('footer'),
};
const sectionsNoHome = document.querySelector('.below-content');
// section specific
const skillsIconsContainer = document.querySelector('.skills-container');
const aboutContainer = document.querySelector('.about-container');
const projectsContainer = document.querySelector('.projects-container');
const sectionTitles = document.querySelectorAll('.section-title');
// skills
const skillsCardButtons = document.getElementById('skills-card-button');
const langBtn = document.getElementById('lang-btn');
// language toggle
if (langBtn) {
    langBtn.addEventListener('click', () => {
        let htmlLang = document.documentElement;
        htmlLang.getAttribute('lang') === 'ja' ? htmlLang.setAttribute('lang', 'en') : htmlLang.setAttribute('lang', 'ja');
        document.body.classList.toggle('ja-mode');
        langBtn.textContent = langBtn.textContent === '日本語' ? 'English' : '日本語';
    });
}
const aboutInfo = document.querySelectorAll('.about-info');
// home arrow to top
const homeArrowIcon = document.getElementById('arrow-icon');
// about chevron
const chevron = document.getElementById('top-chevron');
const mobileChevrons = document.querySelectorAll('#mobile-chevron');
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
function addSlideUpDark(element) {
    element.classList.add('slide-up-dark');
}
window.addEventListener('DOMContentLoaded', () => {
    animationMediaQuery(desktopScreen);
    if (!chevron)
        return;
    addSlideUpDark(chevron);
});
// intersection observer - element IN viewport
// show home arrow button when sections in view
function homeArrowInView(entries) {
    entries.forEach((entry) => {
        if (!homeArrowIcon)
            return;
        if (entry.isIntersecting) {
            homeArrowIcon.classList.remove('hidden');
            homeArrowIcon.classList.add('slide-up-dark');
        }
        else if (!entry.isIntersecting) {
            homeArrowIcon.classList.add('hidden');
            homeArrowIcon.classList.remove('slide-up-dark');
        }
    });
}
const arrowObserver = new IntersectionObserver(homeArrowInView);
if (sectionsNoHome)
    arrowObserver.observe(sectionsNoHome);
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
const allAlbumsObserver = new IntersectionObserver(ElementSlideUp);
const musicCardObserver = new IntersectionObserver(ElementSlideUp);
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
const mobileChevronObserver = new IntersectionObserver(ElementSlideUpDark);
mobileChevrons.forEach((chevron) => {
    if (chevron) {
        mobileChevronObserver.observe(chevron);
    }
});
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
function scrollToView(element) {
    if (!element)
        return;
    element.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}
