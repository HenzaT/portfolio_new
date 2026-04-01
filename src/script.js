// @ts-ignore
import Splide from "../node_modules/@splidejs/splide/dist/js/splide.esm.js";
new Splide('#song-slider').mount();
new Splide('#aptist-slider').mount();
new Splide('#country-slider').mount();
new Splide('#weather-slider').mount();
new Splide('#portfolio-slider').mount();
// new Splide('#country-slider').mount();
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
const copyBtn = document.getElementById('copy-btn');
const copyIcon = document.getElementById('copy-icon');
const emailAddress = document.getElementById('email-address');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const emailText = emailAddress.textContent;
        if (copyIcon.className === 'fa-regular fa-copy') {
            copyIcon.className = 'fa-solid fa-check';
            emailAddress.textContent = 'email copied';
            copyBtn.setAttribute('disabled', '');
            emailAddress.style.pointerEvents = 'none';
        }
        setTimeout(() => {
            copyIcon.className = 'fa-regular fa-copy';
            emailAddress.textContent = 'henrykun95@gmail.com';
            copyBtn.removeAttribute('disabled');
            emailAddress.style.pointerEvents = 'auto';
        }, 2000);
        navigator.clipboard.writeText(emailText);
    });
}
// projects filtering
const projects = {
    therapy: document.getElementById('therapy-site'),
    song: document.getElementById('song-site'),
    weather: document.getElementById('weather-site'),
    aptist: document.getElementById('aptist-site'),
    portfolio: document.getElementById('portfolio-site'),
    countries: document.getElementById('countries-site'),
    jlptrainer: document.getElementById('kanji-site'),
};
const projectCategories = {
    typescript: [projects.therapy, projects.weather, projects.aptist, projects.portfolio, projects.countries],
    javascript: [projects.song],
    react: [projects.therapy, projects.weather, projects.aptist],
    ruby: [projects.song, projects.countries, projects.jlptrainer],
    python: [projects.weather],
    postgres: [projects.song, projects.countries, projects.jlptrainer],
    css: [projects.weather, projects.aptist],
    scss: [projects.therapy, projects.song, projects.portfolio, projects.countries],
    bootstrap: [projects.song],
};
const buttonCategories = {
    typescript: document.getElementById('ts-btn'),
    javascript: document.getElementById('js-btn'),
    react: document.getElementById('react-btn'),
    ruby: document.getElementById('ruby-btn'),
    python: document.getElementById('python-btn'),
    postgres: document.getElementById('postgres-btn'),
    css: document.getElementById('css-btn'),
    scss: document.getElementById('scss-btn'),
    bootstrap: document.getElementById('bootstrap-btn'),
    reset: document.getElementById('reset-filter'),
};
const projectIcons = {
    typescript: document.querySelectorAll('.ts-icon'),
    javascript: document.querySelectorAll('.js-icon'),
    react: document.querySelectorAll('.react-icon'),
    ruby: document.querySelectorAll('.ruby-icon'),
    python: document.querySelectorAll('.python-icon'),
    postgres: document.querySelectorAll('.postgres-icon'),
    css: document.querySelectorAll('.css-icon'),
    scss: document.querySelectorAll('.sass-icon'),
    bootstrap: document.querySelectorAll('.bootstrap-icon'),
};
const filterBtns = document.querySelectorAll('.filter');
const resetFilterBtn = document.getElementById('reset-filter');
let projectCountEn = document.querySelector('.project-count.lang-en');
const highlightButton = (specificBtn) => {
    Object.values(buttonCategories).forEach(button => {
        if (button === buttonCategories[specificBtn]) {
            buttonCategories[specificBtn]?.classList.add('selected');
        }
        else {
            button?.classList.remove('selected');
        }
    });
};
const showCards = (techStack) => {
    if (resetFilterBtn) {
        resetFilterBtn.style.display = 'block';
    }
    Object.values(projectCategories).forEach(projectArray => {
        projectArray.forEach(project => {
            if (project) {
                if (projectCategories[techStack].length > 1) {
                    projectCountEn.textContent = `${projectCategories[techStack].length} projects`;
                }
                else {
                    projectCountEn.textContent = `${projectCategories[techStack].length} project`;
                }
                projectCategories[techStack].includes(project) ? project.style.display = 'flex' : project.style.display = 'none';
            }
        });
    });
};
const highlightIcons = (projectIconArr) => {
    Object.values(projectIcons).forEach(icons => {
        icons.forEach(icon => {
            if (Array.from(projectIcons[projectIconArr]).includes(icon)) {
                icon.classList.add('highlight');
            }
            else {
                icon.classList.remove('highlight');
            }
        });
    });
};
const buttonActions = (tech) => {
    highlightButton(tech);
    showCards(tech);
    highlightIcons(tech);
};
Object.values(buttonCategories).forEach(button => {
    button?.addEventListener('click', () => {
        switch (button) {
            case buttonCategories.typescript:
                buttonActions('typescript');
                break;
            case buttonCategories.javascript:
                buttonActions('javascript');
                break;
            case buttonCategories.react:
                buttonActions('react');
                break;
            case buttonCategories.ruby:
                buttonActions('ruby');
                break;
            case buttonCategories.python:
                buttonActions('python');
                break;
            case buttonCategories.postgres:
                buttonActions('postgres');
                break;
            case buttonCategories.css:
                buttonActions('css');
                break;
            case buttonCategories.scss:
                buttonActions('scss');
                break;
            case buttonCategories.bootstrap:
                buttonActions('bootstrap');
                break;
            default:
                Object.values(buttonCategories).forEach(button => {
                    button?.classList.remove('selected');
                });
                Object.values(projects).forEach(project => {
                    if (project) {
                        project.style.display = 'flex';
                    }
                    projectCountEn.textContent = `${Object.values(projects).length} projects`;
                });
                Object.values(projectIcons).forEach(icons => {
                    icons.forEach(icon => {
                        icon.classList.remove('highlight');
                    });
                });
                if (resetFilterBtn) {
                    resetFilterBtn.style.display = 'none';
                }
                break;
        }
    });
});
const projectAlbumMusicSkillsCards = [skillsIconsContainer];
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const langBtn = document.getElementById('lang-btn');
const arrowBtn = document.getElementById('arrow-icon');
const hrLine = document.getElementsByTagName('hr');
const projectLinks = document.querySelectorAll('.project-card__link');
const skillsCard = document.querySelector('.skills-icons');
const skillsRadio = document.querySelector('.skills-radio');
const highlighted = document.querySelectorAll('.highlight');
const elements = [themeBtn, langBtn, arrowBtn, skillsCard, skillsRadio];
// const manyElements = (elements: NodeListOf<Element>, el: Element ) => {
//   elements.forEach(el => {
//     el.classList.toggle('dark');
//   })
// };
// light & dark mode toggle
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        elements.forEach(el => {
            el.classList.toggle('dark');
        });
        Array.from(hrLine).forEach(line => {
            line.classList.toggle('dark');
        });
        projectLinks.forEach(link => {
            link.classList.toggle('dark');
        });
        highlighted.forEach(word => {
            word.classList.toggle('dark');
        });
        if (themeIcon.className === 'fa-solid fa-moon') {
            themeIcon.className = 'fa-solid fa-sun';
            document.body.className = 'dark';
        }
        else {
            themeIcon.className = 'fa-solid fa-moon';
            document.body.className = 'light';
        }
    });
}
// language toggle
if (langBtn) {
    langBtn.addEventListener('click', () => {
        let htmlLang = document.documentElement;
        htmlLang.getAttribute('lang') === 'ja' ? htmlLang.setAttribute('lang', 'en') : htmlLang.setAttribute('lang', 'ja');
        document.body.classList.toggle('ja-mode');
        langBtn.textContent = langBtn.textContent === '日本語' ? 'English' : '日本語';
    });
}
// radio buttons
const skillsRadioButtons = document.querySelectorAll('.skills-radio');
;
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
const allCards = [card.interests, card.experience, card.education];
const aboutInfo = document.querySelectorAll('.about-info');
// icons
const languageIcons = [
    document.getElementById('ruby'),
    document.getElementById('ts'),
    document.getElementById('js'),
    document.getElementById('python'),
    document.getElementById('perl'),
];
const frameworkIcons = [
    document.getElementById('rails'),
    document.getElementById('bootstrap'),
    document.getElementById('react'),
];
const toolIcons = [
    document.getElementById('html'),
    document.getElementById('css'),
    document.getElementById('sass'),
    document.getElementById('git'),
    document.getElementById('github'),
    document.getElementById('heroku'),
    document.getElementById('netlify'),
    document.getElementById('linux'),
    document.getElementById('proxmox'),
    document.getElementById('vim'),
];
const dbIcons = [
    document.getElementById('postgres'),
    document.getElementById('mysql'),
    document.getElementById('mariadb'),
];
const iconGroups = {
    languages: languageIcons,
    frameworks: frameworkIcons,
    tools: toolIcons,
    databases: dbIcons
};
const allIcons = [...languageIcons, ...frameworkIcons, ...toolIcons, ...dbIcons];
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
            clearFadeExpand();
        }
    });
}
;
const skillsObserver = new IntersectionObserver(clear);
if (skillsIconsContainer)
    skillsObserver.observe(skillsIconsContainer);
// reset about cards
function resetAbout(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            card.experience?.classList.remove('fade');
            card.experience?.classList.add('expand');
            card.interests?.classList.remove('expand');
            card.interests?.classList.add('fade');
            card.education?.classList.remove('expand');
            card.education?.classList.add('fade');
        }
    });
}
const aboutObserver = new IntersectionObserver(resetAbout);
if (aboutContainer)
    aboutObserver.observe(aboutContainer);
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
projectAlbumMusicSkillsCards.forEach((card) => {
    if (!card)
        return;
    card.addEventListener('click', () => {
        scrollToView(card);
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
            .find(buttonName => radioButtons[buttonName]?.checked);
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
