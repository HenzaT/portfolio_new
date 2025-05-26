"use strict";
// section variables
const homeSection = document.getElementById('home');
const projectsSection = document.getElementById('projects');
const skillsSection = document.getElementById('skills');
const musicSection = document.getElementById('music');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');
const allSections = [
    homeSection,
    projectsSection,
    skillsSection,
    musicSection,
    aboutSection,
    contactSection
];
const sectionsNoHome = document.querySelector('.below-content');
// section specific
const skillsIconsContainer = document.querySelector('.skills-container');
// nav
const highlight = document.querySelector('.highlight');
const navLinks = document.querySelectorAll('.nav-link');
const homeNavLink = document.getElementById('home-link');
// banner
const bannerLeft = document.querySelector('.banner-text-left');
const bannerCenter = document.querySelector('.banner-text-center');
const bannerRight = document.querySelector('.banner-text-right');
// projects
const projectImages = document.querySelectorAll('.project-image');
const projectOverlays = document.querySelectorAll('.project-card-overlay');
// music
const albumImages = document.querySelectorAll('.album-art');
const albumOverlays = document.querySelectorAll('.album-card-overlay');
// radio buttons
const aboutRadioButtons = document.querySelectorAll('.radio');
const skillsRadioButtons = document.querySelectorAll('.skills-radio');
const radioButtons = {
    experience: document.getElementById('experience'),
    interests: document.getElementById('interests'),
    education: document.getElementById('education'),
    languages: document.getElementById('languages'),
    frameworks: document.getElementById('frameworks'),
    tools: document.getElementById('tools'),
    databases: document.getElementById('databases')
};
// about cards
const card = {
    experience: document.getElementById('experience-card'),
    interests: document.getElementById('interests-card'),
    education: document.getElementById('education-card')
};
const allCards = [card.experience, card.interests, card.education];
const experienceInfo = {
    title: document.getElementById('experience-title'),
    text: document.getElementById('experience-text'),
    icons: document.getElementById('experience-icons')
};
const interestsInfo = {
    title: document.getElementById('interests-title'),
    text: document.getElementById('interests-text'),
    icons: document.getElementById('interests-icons')
};
const educationInfo = {
    title: document.getElementById('experience-title'),
    text: document.getElementById('experience-text'),
    icons: document.getElementById('experience-icons')
};
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
// on page load
window.addEventListener('DOMContentLoaded', () => {
    bannerLeft === null || bannerLeft === void 0 ? void 0 : bannerLeft.classList.add('slide-right');
    bannerRight === null || bannerRight === void 0 ? void 0 : bannerRight.classList.add('slide-left');
    bannerCenter === null || bannerCenter === void 0 ? void 0 : bannerCenter.classList.add('slide-up');
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
if (sectionsNoHome) {
    arrowObserver.observe(sectionsNoHome);
}
// highlight nav when each section is in viewport
// function sectionViewChangeNav(entries: IntersectionObserverEntry[]) {
//   entries.forEach((entry: IntersectionObserverEntry) => {
//     if (entry.isIntersecting) {
//       navLinkClick(entry)
//     }
//   });
// };
// const sectionObserver = new IntersectionObserver(sectionViewChangeNav);
// allSections.forEach(section=> {
//   if (section) {
//     sectionObserver.observe(section);
//   }
// });
// widen separation bars
function widenBar(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('widen');
        }
    });
}
;
const barObserver = new IntersectionObserver(widenBar);
let dividingBars = document.querySelectorAll('.dividing-bar');
dividingBars.forEach(bar => {
    if (bar) {
        barObserver.observe(bar);
    }
});
// intersection observer - element OUT of viewport
// clear skills container
function clear(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            clearFadeExpand();
            skillsRadioButtons.forEach(button => {
                button.removeAttribute('checked');
            });
        }
    });
}
;
const skillsObserver = new IntersectionObserver(clear);
skillsObserver.observe(skillsIconsContainer);
// navbar select
function moveHighlight(target) {
    // get position and size of clicked link
    const rect = target.getBoundingClientRect();
    const container = document.querySelector('.navbar-links');
    // get position of navbar-links container
    if (!container)
        return;
    const containerRect = container.getBoundingClientRect();
    highlight.style.width = `${rect.width}px`;
    highlight.style.height = `${rect.height}px`;
    highlight.style.left = `${rect.left - containerRect.left}px`;
    highlight.style.top = `${rect.top - containerRect.top}px`;
}
function navLinkClick(link) {
    var _a;
    (_a = document.querySelector('.nav-link.active')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
    link.classList.add('active');
    moveHighlight(link);
}
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinkClick(link);
    });
});
homeArrowIcon.addEventListener('click', () => {
    navLinkClick(homeNavLink);
});
window.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink)
        moveHighlight(activeLink);
});
// about cards toggle
aboutRadioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let selectedCard = null;
        if (radioButtons.experience.checked) {
            selectedCard = card.experience;
        }
        else if (radioButtons.interests.checked) {
            selectedCard = card.interests;
        }
        else if (radioButtons.education.checked) {
            selectedCard = card.education;
        }
        allCards.forEach((card) => {
            if (!card) {
                console.error(`there is no ${card}`);
                return;
            }
            if (card === selectedCard) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            }
            else {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });
    });
});
// plus toggle to show more info
function openOverlay(button) {
    const id = button.dataset.id;
    if (!id)
        return;
    button.classList.toggle('rotate');
    const projectOverlay = document.querySelector(`.project-card-overlay[data-id="${id}"]`);
    const projectImage = document.querySelector(`.project-image[data-id="${id}"]`);
    const musicOverlay = document.querySelector(`.album-card-overlay[data-id="${id}"]`);
    const musicImage = document.querySelector(`.album-art[data-id="${id}"]`);
    if (projectOverlay) {
        projectOverlay.classList.toggle('show');
    }
    if (projectImage) {
        projectImage.classList.toggle('darken');
    }
    if (musicOverlay) {
        musicOverlay.classList.toggle('show');
    }
    if (musicImage) {
        musicImage === null || musicImage === void 0 ? void 0 : musicImage.classList.toggle('darken');
    }
}
;
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
            icon.classList.remove('fade');
            icon.classList.remove('expand');
        });
    });
}
;
skillsRadioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clearFadeExpand();
        const selected = Object.keys(radioButtons).find(buttonName => radioButtons[buttonName].checked);
        Object.entries(iconGroups).forEach(([group, icons]) => {
            if (group !== selected) {
                icons.forEach((icon) => icon.classList.add('fade'));
            }
            if (group === selected) {
                icons.forEach((icon) => icon.classList.add('expand'));
            }
        });
    });
});
