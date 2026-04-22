export function skillsToggle() {
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
    const skillsRadioButtons = document.querySelectorAll('.skills-radio');
    const skillsIconsContainer = document.querySelector('.skills-icons');
    const clearFadeExpand = () => {
        Object.values(iconGroups).forEach(group => {
            group.forEach((icon) => {
                if (!icon)
                    return;
                icon.classList.remove('fade');
                icon.classList.remove('expand');
            });
        });
    };
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
                icons.forEach(icon => {
                    group !== selected ? icon?.classList.add('fade') : icon?.classList.add('expand');
                });
            });
        });
    });
    // reset icons if out of viewport
    const clear = (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                clearFadeExpand();
            }
        });
    };
    const skillsObserver = new IntersectionObserver(clear);
    if (skillsIconsContainer)
        skillsObserver.observe(skillsIconsContainer);
}
