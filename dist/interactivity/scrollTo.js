// scroll to element when clicked
export function scrollToView() {
    const projectArticles = document.querySelectorAll('.project-card');
    const skillsContainer = document.getElementById('skills-card-buttons');
    const goToElement = (element) => {
        element.addEventListener('click', () => {
            element.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        });
    };
    projectArticles.forEach(article => { goToElement(article); });
    if (skillsContainer)
        goToElement(skillsContainer);
}
