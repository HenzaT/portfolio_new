export function scrollToView() {
    const projectArticles = document.querySelectorAll('.project-card');
    const skillsContainer = document.querySelector('.card-and-button-container');
    projectArticles.forEach(article => {
        article.addEventListener('click', () => {
            article.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        });
    });
    if (skillsContainer) {
        skillsContainer.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    }
}
