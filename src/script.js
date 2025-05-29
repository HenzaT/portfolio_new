"use strict";
// section variables
const sections = {
    home: document.getElementById('home'),
    projects: document.getElementById('projects'),
    skills: document.getElementById('skills'),
    music: document.getElementById('music'),
    about: document.getElementById('about'),
    contact: document.getElementById('contact')
};
const sectionsNoHome = document.querySelector('.below-content');
// section specific
const skillsIconsContainer = document.querySelector('.skills-container');
const sectionTitles = document.querySelectorAll('.section-title');
const aboutContainer = document.querySelector('.about-container');
const projectsContainer = document.querySelector('.projects-container');
// nav
const navLinks = document.querySelectorAll('.nav-link');
const homeNavLink = document.getElementById('home-link');
// banner
const bannerLeft = document.querySelector('.banner-text-left');
const bannerRight = document.querySelector('.banner-text-right');
// projects
const projectImages = document.querySelectorAll('.project-image');
const projectOverlays = document.querySelectorAll('.project-card-overlay');
// skills
const skillsCardButtons = document.getElementById('skills-card-button');
// music
const allAlbums = document.querySelector('.all-albums');
const albumImages = document.querySelectorAll('.album-art');
const albumOverlays = document.querySelectorAll('.album-card-overlay');
// radio buttons
const skillsRadioButtons = document.querySelectorAll('.skills-radio');
const radioButtons = {
    languages: document.getElementById('languages'),
    frameworks: document.getElementById('frameworks'),
    tools: document.getElementById('tools'),
    databases: document.getElementById('databases')
};
// cards
const card = {
    interests: document.getElementById('interests-card'),
    experience: document.getElementById('experience-card'),
    education: document.getElementById('education-card'),
    music: document.querySelector('.music-card')
};
let allCards = [card.interests, card.experience, card.education];
const aboutInfo = document.querySelectorAll('.about-info');
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
const homeArrow = document.querySelector('.home-arrow');
const homeArrowIcon = document.getElementById('arrow-icon');
// about chevron
const chevron = document.querySelector('.about-chevron');
// plus button
const plusButtons = document.querySelectorAll('.plus');
const musicPlusButtons = document.querySelectorAll('.music-plus');
// Desktop screen size
const desktopScreen = window.matchMedia("(min-width: 1210px)");
// on page load
function animationMediaQuery(media) {
    if (media.matches) {
        bannerLeft === null || bannerLeft === void 0 ? void 0 : bannerLeft.classList.add('slide-right');
        bannerRight === null || bannerRight === void 0 ? void 0 : bannerRight.classList.add('slide-left');
    }
    else {
        bannerLeft === null || bannerLeft === void 0 ? void 0 : bannerLeft.classList.add('slide-right-center');
        bannerRight === null || bannerRight === void 0 ? void 0 : bannerRight.classList.add('slide-left-center');
    }
}
;
window.addEventListener('DOMContentLoaded', () => {
    animationMediaQuery(desktopScreen);
    chevron === null || chevron === void 0 ? void 0 : chevron.classList.add('slide-up-dark');
});
// intersection observer - element IN viewport
// show home arrow button when sections in view
function homeArrowInView(entries) {
    entries.forEach((entry) => {
        if (!homeArrow)
            return;
        if (entry.isIntersecting) {
            homeArrow.classList.remove('hidden');
            homeArrow.classList.add('slide-up-dark');
        }
        else if (!entry.isIntersecting) {
            homeArrow.classList.add('hidden');
            homeArrow.classList.remove('slide-up-dark');
        }
    });
}
const arrowObserver = new IntersectionObserver(homeArrowInView);
if (sectionsNoHome)
    arrowObserver.observe(sectionsNoHome);
// highlight nav when each section is in viewport
function sectionViewChangeNav(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navLinks.forEach((link) => {
                var _a;
                const linkTarget = (_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1);
                if (linkTarget === sectionId) {
                    link.classList.add('active');
                }
                else {
                    link.classList.remove('active');
                }
            });
        }
    });
}
;
const sectionObserver = new IntersectionObserver(sectionViewChangeNav, {
    threshold: 0.3
});
Object.entries(sections).forEach(([name, section]) => {
    if (section) {
        sectionObserver.observe(section);
    }
    else {
        console.warn(`Section "${name}" not found in the DOM.`);
    }
});
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
if (allAlbums)
    allAlbumsObserver.observe(allAlbums);
if (card.music)
    musicCardObserver.observe(card.music);
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
const middleAboutCard = new IntersectionObserver(ElementSlideUpExpand);
if (card.experience)
    middleAboutCard.observe(card.experience);
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
const leftAndRightAboutCard = new IntersectionObserver(ElementSlideUpFade);
if (card.education && card.interests) {
    leftAndRightAboutCard.observe(card.education);
    leftAndRightAboutCard.observe(card.interests);
}
// intersection observer - element OUT of viewport
// clear skills container
function clear(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            clearFadeExpand();
        }
    });
}
;
const skillsObserver = new IntersectionObserver(clear);
if (skillsIconsContainer)
    skillsObserver.observe(skillsIconsContainer);
// navbar select
function navLinkClick(link) {
    var _a;
    (_a = document.querySelector('.nav-link.active')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
    link.classList.add('active');
}
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinkClick(link);
    });
});
if (homeArrowIcon) {
    homeArrowIcon.addEventListener('click', () => {
        if (!homeNavLink)
            return;
        navLinkClick(homeNavLink);
    });
}
homeNavLink === null || homeNavLink === void 0 ? void 0 : homeNavLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// about cards toggle
function aboutCardMediaQuery(media) {
    allCards.forEach((card) => {
        if (!card)
            return;
        if (media.matches) {
            card.classList.remove('expand', 'fade');
            card.addEventListener('click', () => {
                allCards.forEach((active) => {
                    active === null || active === void 0 ? void 0 : active.classList.remove('expand');
                    active === null || active === void 0 ? void 0 : active.classList.add('fade');
                });
                card.classList.add('expand');
                card.classList.remove('fade');
            });
        }
        else {
            card.classList.remove('expand', 'fade');
        }
    });
}
;
aboutCardMediaQuery(desktopScreen);
desktopScreen.addEventListener("change", () => {
    aboutCardMediaQuery(desktopScreen);
});
// plus toggle to show more info
function toggleClassBySelector(selector, className, id) {
    const element = document.querySelector(`${selector}[data-id="${id}"]`);
    if (!element)
        return;
    element.classList.toggle(className);
}
function openOverlay(button) {
    const id = button.dataset.id;
    if (!id)
        return;
    button.classList.toggle('rotate');
    toggleClassBySelector('.project-card-overlay', 'show', id);
    toggleClassBySelector('.project-image', 'darken', id);
    toggleClassBySelector('.album-card-overlay', 'show', id);
    toggleClassBySelector('.album-art', 'darken', id);
}
;
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
function clearFadeExpand() {
    Object.values(iconGroups).forEach(group => {
        group.forEach((icon) => {
            if (!icon)
                return;
            icon.classList.remove('fade');
            icon.classList.remove('expand');
        });
    });
}
;
skillsRadioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clearFadeExpand();
        const selected = Object.keys(radioButtons)
            .find(buttonName => { var _a; return (_a = radioButtons[buttonName]) === null || _a === void 0 ? void 0 : _a.checked; });
        Object.entries(iconGroups).forEach(([group, icons]) => {
            if (group !== selected) {
                icons.forEach((icon) => {
                    if (icon) {
                        icon.classList.add('fade');
                    }
                });
            }
            else if (group === selected) {
                icons.forEach((icon) => {
                    if (icon) {
                        icon.classList.add('expand');
                    }
                });
            }
            ;
        });
    });
});
