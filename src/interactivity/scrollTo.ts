// scroll to element when clicked
export function scrollToView() {
  const skillsContainer = document.getElementById('skills-card-buttons');
  const projectArticles = document.querySelectorAll('.project-card');
  const projectFilters  = document.querySelector('.filter-btns');

  const goToElement = (element: Element) => {
    element.addEventListener('click', () => {
      element.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
      });
    })
  }

  if (skillsContainer) goToElement(skillsContainer);
  if (projectFilters) goToElement(projectFilters);
  projectArticles.forEach(article => goToElement(article));
}
