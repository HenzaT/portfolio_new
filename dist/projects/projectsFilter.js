export function projectsFilter() {
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
}
