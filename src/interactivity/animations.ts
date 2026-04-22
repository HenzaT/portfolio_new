export function animations() {
  const headerElements = {
    name:  document.getElementById('name'),
    title: document.getElementById('job-title'),
    about: document.getElementById('about-me')
  };

  const addSlideUpDark = (element: HTMLElement) => {
    element.classList.remove('hidden');
    element.classList.add('slide-up-dark');
  }

  window.addEventListener('DOMContentLoaded', () => {
    Object.values(headerElements).forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          addSlideUpDark(el)
        }, index * 500);
      }
    })
  });
}
