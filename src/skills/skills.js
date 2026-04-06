import { skillsData } from "./skillsData.js";
export function skills() {
    const skillTemplate = document.getElementById('skills-template');
    const skillsDiv = document.querySelector('.skills-icons');
    skillsData.forEach(icon => {
        const clone = skillTemplate.content.cloneNode(true);
        const iconEl = clone.querySelector('.template-icon-class');
        if (iconEl) {
            iconEl.id = icon['id'];
            iconEl?.classList.add(icon['class']);
            iconEl?.setAttribute('title', icon['title']);
        }
        skillsDiv?.appendChild(clone);
    });
}
;
