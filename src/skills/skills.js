import { skillsData } from "./skillsData.js";
export const skillTemplate = document.getElementById('skills-template');
export const skillsDiv = document.querySelector('.skills-icons');
export const clone = skillTemplate.content.cloneNode(true);
export const iconEl = clone.querySelector('.template-icon-class');
export function skills() {
    skillsData.forEach(icon => {
        if (iconEl) {
            iconEl.id = icon['id'];
            iconEl?.classList.add(icon['class']);
            iconEl?.setAttribute('title', icon['title']);
        }
        skillsDiv?.appendChild(clone);
    });
}
;
