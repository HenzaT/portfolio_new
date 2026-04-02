export function skills() {
    const icons = [
        { 'id': 'ruby', 'class': 'devicon-ruby-plain', 'title': 'ruby icon' },
        { 'id': 'ts', 'class': 'devicon-typescript-plain', 'title': 'typescript icon' },
        { 'id': 'js', 'class': 'devicon-javascript-plain', 'title': 'javascript icon' },
        { 'id': 'python', 'class': 'devicon-python-plain', 'title': 'python icon' },
        { 'id': 'perl', 'class': 'devicon-perl-plain', 'title': 'perl icon' },
        { 'id': 'rails', 'class': 'devicon-rails-plain', 'title': 'ruby on rails icon' },
        { 'id': 'bootstrap', 'class': 'devicon-bootstrap-plain', 'title': 'bootstrap icon' },
        { 'id': 'react', 'class': 'devicon-react-original', 'title': 'reactjs icon' },
        { 'id': 'html', 'class': 'devicon-html5-plain-wordmark', 'title': 'html5 icon' },
        { 'id': 'css', 'class': 'devicon-css3-plain-wordmark', 'title': 'css3 icon' },
        { 'id': 'sass', 'class': 'devicon-sass-original', 'title': 'sass icon' },
        { 'id': 'git', 'class': 'devicon-git-plain-wordmark', 'title': 'git icon' },
        { 'id': 'github', 'class': 'devicon-github-original', 'title': 'github icon' },
        { 'id': 'heroku', 'class': 'devicon-heroku-original', 'title': 'heroku icon' },
        { 'id': 'netlify', 'class': 'devicon-netlify-plain', 'title': 'netlify icon' },
        { 'id': 'linux', 'class': 'devicon-linux-plain', 'title': 'linux icon' },
        { 'id': 'proxmox', 'class': 'devicon-proxmox-plain', 'title': 'proxmox icon' },
        { 'id': 'vim', 'class': 'devicon-vim-plain', 'title': 'vim icon' },
        { 'id': 'postgres', 'class': 'devicon-postgresql-plain', 'title': 'postgres icon' },
        { 'id': 'mysql', 'class': 'devicon-mysql-original', 'title': 'mysql icon' },
        { 'id': 'mariadb', 'class': 'devicon-mariadb-original-wordmark', 'title': 'mariadb icon' },
    ];
    const skillTemplate = document.getElementById('skills-template');
    const skillsDiv = document.querySelector('.skills-icons');
    icons.forEach(icon => {
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
