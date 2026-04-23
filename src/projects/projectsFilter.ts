import { getProjectIcons } from './getProjectIcons.js'
import { getProjectCards } from './getProjectCards.js';

// filter projects using buttons
export function projectsFilter() {
  const projectIcons = getProjectIcons();
  const projects = getProjectCards();

  const projectCategories = {
    typescript: [ projects.therapy, projects.weather, projects.aptist, projects.portfolio, projects.countries ],
    javascript: [ projects.song ],
    react:      [ projects.therapy, projects.weather, projects.aptist ],
    ruby:       [ projects.song, projects.countries, projects.jlptrainer ],
    python:     [ projects.weather ],
    postgres:   [ projects.song, projects.countries, projects.jlptrainer ],
    css:        [ projects.weather, projects.aptist ],
    scss:       [ projects.therapy, projects.song, projects.portfolio, projects.countries ],
    bootstrap:  [ projects.song ],
  };

  const buttonCategories = {
    typescript: document.getElementById('ts-btn'),
    javascript: document.getElementById('js-btn'),
    react:      document.getElementById('react-btn'),
    ruby:       document.getElementById('ruby-btn'),
    python:     document.getElementById('python-btn'),
    postgres:   document.getElementById('postgres-btn'),
    css:        document.getElementById('css-btn'),
    scss:       document.getElementById('scss-btn'),
    bootstrap:  document.getElementById('bootstrap-btn'),
    reset:      document.getElementById('reset-filter'),
  };

  const resetFilterBtn   = buttonCategories.reset as HTMLButtonElement;
  let projectCountEn = document.querySelector('.lang-en.project-count') as HTMLHeadingElement;
  let projectCountJa = document.querySelector('.lang-ja.project-count') as HTMLHeadingElement;

  const highlightButton = (btn: keyof typeof buttonCategories) => {
    Object.values(buttonCategories).forEach(button => {
      button === buttonCategories[btn] ? buttonCategories[btn]?.classList.add('selected') : button?.classList.remove('selected');
    })
  }

  const showCards = (techStack: keyof typeof projectCategories) => {
    if (resetFilterBtn) { resetFilterBtn.style.display = 'block'; }
    Object.values(projectCategories).forEach(projectArray => {
      projectArray.forEach(project => {
        if (project) {
          const count = projectCategories[techStack].length;
          projectCountJa.textContent = `プロジェクト数: ${count}`
          if (count > 1) {
            projectCountEn.textContent = `${count} projects`;
          } else {
            projectCountEn.textContent = `${count} project`;
          }
          projectCategories[techStack].includes(project) ? project.style.display = 'flex' : project.style.display = 'none';
        }
      });
    })
  };

  const highlightIcons = (iconArr: keyof typeof projectIcons) => {
    Object.values(projectIcons).forEach(icons => {
      icons.forEach(icon => {
        Array.from(projectIcons[iconArr]).includes(icon) ? icon.classList.add('highlight') : icon.classList.remove('highlight');
      })
    })
  };

  const buttonActions = (tech: keyof typeof projectCategories) => {
    highlightButton(tech as keyof typeof buttonCategories);
    showCards(tech as keyof typeof projectCategories);
    highlightIcons(tech as keyof typeof projectIcons);
  }

  Object.values(buttonCategories).forEach(button => {
    button?.addEventListener('click', () => {
      switch (button) {
        case buttonCategories.typescript:
          buttonActions('typescript')
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
          })
          Object.values(projects).forEach(project => {
            if (project) { project.style.display = 'flex'; }
            projectCountEn.textContent = `${Object.values(projects).length} projects`;
            projectCountJa.textContent = `プロジェクト数：${Object.values(projects).length}`;
          });
          Object.values(projectIcons).forEach(icons => {
            icons.forEach(icon => {
              icon.classList.remove('highlight');
            });
          });
          if (resetFilterBtn) { resetFilterBtn.style.display = 'none'; }
          break;
      }
    })
  })
}
