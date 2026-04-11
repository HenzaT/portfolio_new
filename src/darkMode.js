export function darkMode() {
    const hrLine = document.getElementsByTagName('hr');
    const boxDiv = document.querySelectorAll('.box');
    const filterBtns = document.querySelectorAll('.filter');
    const projectLinks = document.querySelectorAll('.project-card__link');
    const projectImgs = document.querySelectorAll('.splide');
    const highlighted = document.querySelectorAll('.highlight');
    const radioLabels = document.querySelectorAll('.radio-label');
    const footerIcons = document.querySelectorAll('.footer-icon');
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = document.getElementById('theme-icon');
    const langBtn = document.getElementById('lang-btn');
    const arrowBtn = document.getElementById('arrow-icon');
    const skillsCard = document.querySelector('.skills-icons');
    const skillsRadio = document.querySelector('.skills-radio');
    const resetFilter = document.getElementById('reset-filter');
    const elements = [themeBtn, langBtn, arrowBtn, skillsCard, skillsRadio, resetFilter];
    const elementsList = (elements) => {
        elements.forEach(el => {
            el.classList.toggle('dark');
        });
    };
    // light & dark mode toggle
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            elements.forEach(el => {
                el.classList.toggle('dark');
            });
            Array.from(hrLine).forEach(line => {
                line.classList.toggle('dark');
            });
            elementsList(highlighted);
            elementsList(filterBtns);
            elementsList(boxDiv);
            elementsList(projectLinks);
            elementsList(projectImgs);
            elementsList(radioLabels);
            elementsList(footerIcons);
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
}
