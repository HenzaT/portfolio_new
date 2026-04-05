import { skillsData } from "./skillsData.js";
export function skills() {
    const skillTemplate = document.getElementById('skills-template');
    const skillsDiv = document.querySelector('.skills-icons');
    skillsData.forEach(icon => {
        const clone = skillTemplate.content.cloneNode(true);
        const iconEl = clone.querySelector('.template-icon-class');
        if (iconEl) {
            iconEl.id = icon.id;
            iconEl?.classList.add(icon.class);
            iconEl?.setAttribute('title', icon.title);
        }
        skillsDiv?.appendChild(clone);
    });
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
    // radio buttons
    const skillsRadioButtons = document.querySelectorAll('.skills-radio');
    ;
    const radioButtons = {
        languages: document.getElementById('languages'),
        frameworks: document.getElementById('frameworks'),
        tools: document.getElementById('tools'),
        databases: document.getElementById('databases')
    };
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
}
;
