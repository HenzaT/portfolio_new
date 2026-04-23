// @ts-ignore
import { imgSliderSplide } from "./imgSliderSplide.js";
import { darkMode } from "./darkMode.js";
import { toggleLang } from "./toggleLang.js";
import { animations } from "./interactivity/animations.js";
import { scrollToView } from "./interactivity/scrollTo.js";
import { intersectionObserver } from "./interactivity/intersectionObserver.js";
import { projectCards } from "./projects/projects.js";
import { projectsFilter } from "./projects/projectsFilter.js";
import { skills } from "./skills/skills.js";
import { skillsFilter } from "./skills/skillsFilter.js";
import { footer } from "./footer.js";

document.addEventListener('DOMContentLoaded', () => {
  animations();
  projectCards();
  projectsFilter();
  skills();
  skillsFilter();
  scrollToView();
  footer();
  imgSliderSplide();
  darkMode();
  toggleLang();
  intersectionObserver();
});
