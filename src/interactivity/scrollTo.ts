export function scrollToView() {
  const projectArticles = document.querySelectorAll('.project-card');
  const skillsContainer = document.querySelector('.card-and-button-container');

  const goToElement = (element: Element) => {
    element.addEventListener('click', () => {
      element.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
      });
    })
  }

  projectArticles.forEach(article => { goToElement(article); })
  if (skillsContainer) { goToElement(skillsContainer); }
}
