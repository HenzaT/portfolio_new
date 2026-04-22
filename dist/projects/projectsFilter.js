import { getProjectIcons } from './getProjectIcons.js';
export function projectsFilter() {
    const projectIcons = getProjectIcons();
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
    const resetFilterBtn = buttonCategories.reset;
    let projectCount = document.querySelectorAll('.project-count');
    let projectSubHeaderEn = document.querySelector('.lang-en.project-subheader-en');
    let projectSubHeaderJa = document.querySelector('.lang-ja.project-subheader-ja');
    const highlightButton = (btn) => {
        Object.values(buttonCategories).forEach(button => {
            button === buttonCategories[btn] ? buttonCategories[btn]?.classList.add('selected') : button?.classList.remove('selected');
        });
    };
    const showCards = (techStack) => {
        if (resetFilterBtn) {
            resetFilterBtn.style.display = 'block';
        }
        Object.values(projectCategories).forEach(projectArray => {
            projectArray.forEach(project => {
                if (project) {
                    projectCount.forEach(count => {
                        count.textContent = `${projectCategories[techStack].length}`;
                    });
                    projectCategories[techStack].length > 1 ? projectSubHeaderEn.textContent = 'projects' : 'project';
                    projectCategories[techStack].includes(project) ? project.style.display = 'flex' : project.style.display = 'none';
                }
            });
        });
    };
    const highlightIcons = (iconArr) => {
        Object.values(projectIcons).forEach(icons => {
            icons.forEach(icon => {
                Array.from(projectIcons[iconArr]).includes(icon) ? icon.classList.add('highlight') : icon.classList.remove('highlight');
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
                        projectSubHeaderEn.textContent = `${Object.values(projects).length} projects`;
                        projectSubHeaderJa.textContent = `プロジェクト数：${Object.values(projects).length}`;
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
}
