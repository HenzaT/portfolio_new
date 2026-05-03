import { projectsData } from "./projectsData.js";

// create project cards with template
export function projectCards() {
  const projectsTemplate = document.getElementById('projects-template') as HTMLTemplateElement;
  const projectsGrid = document.querySelector('.grid');

  projectsData.forEach(project => {
    const clone         = projectsTemplate.content.cloneNode(true) as DocumentFragment;
    const card          = clone.querySelector('.project-card');
    const title         = clone.querySelector('.project-card__title');
    const taglineEn     = clone.querySelector('.project-card__tagline .lang-en');
    const taglineJa     = clone.querySelector('.project-card__tagline .lang-ja');
    const splider       = clone.querySelector('.splide');
    const descriptionEn = clone.querySelector('.project-card__description');
    const splideUl      = clone.querySelector('.splide__list');
    const iconContainer = clone.querySelector('.project-card__tech-icons-container');
    const linksDiv      = clone.querySelector('.project-card__links');

    // top-level info
    if (card) card.id = project['articleId'];
    if (title) title.textContent = project['title'];
    if (taglineEn) taglineEn.textContent = project['taglineEn'];
    if (taglineJa) taglineJa.textContent = project['taglineJa'];
    if (splider) splider.id = project['spliderId'];
    if (splider) splider.setAttribute('aria-label', project['aria-label']);
    if (descriptionEn) descriptionEn.innerHTML = project['description'];

    // splider
    project['spliderLi'].forEach(imageObj => {
      const li = document.createElement('li');
      li.classList.add('splide__slide');
      const img = document.createElement('img');
      img.src = imageObj.url;
      img.alt = imageObj.alt;
      li?.appendChild(img);
      splideUl?.appendChild(li);
    })

    // icons
    project['icons'].forEach(iconObj => {
      const iEl = document.createElement('i');
      iEl.className = iconObj['class'];
      iEl.setAttribute('title', iconObj['title']);
      iconContainer?.appendChild(iEl);
    })

    // links
    project['links'].forEach(linkObj => {
      const aTag = document.createElement('a');
      aTag.setAttribute('href', linkObj['url']);
      aTag.classList.add('project-card__link');
      aTag.setAttribute('title', linkObj['title']);
      const linkIcon = document.createElement('i');
      linkIcon.className = linkObj['class'];
      linkIcon.setAttribute('title', linkObj['iTitle']);
      aTag?.appendChild(linkIcon);
      linksDiv?.appendChild(aTag);
    })

    projectsGrid?.appendChild(clone);
  });
};
