export function intersectionObserver() {
    // section variables
    const sections = {
        nav: document.getElementById('nav'),
        header: document.getElementById('main-header'),
        projects: document.getElementById('projects'),
        skills: document.getElementById('skills'),
        footer: document.getElementById('footer'),
    };
    const mainContent = [sections.projects, sections.skills, sections.footer];
    const homeArrowIcon = document.getElementById('arrow-icon');
    // show home arrow button when sections in view
    function homeArrowInView(entries) {
        entries.forEach((entry) => {
            if (!homeArrowIcon)
                return;
            if (entry.isIntersecting) {
                homeArrowIcon.classList.remove('hidden');
                homeArrowIcon.classList.add('slide-up-dark');
            }
            else if (!entry.isIntersecting) {
                homeArrowIcon.classList.add('hidden');
                homeArrowIcon.classList.remove('slide-up-dark');
            }
        });
    }
    const arrowObserver = new IntersectionObserver(homeArrowInView);
    mainContent.forEach(section => {
        if (section) {
            arrowObserver.observe(section);
        }
    });
}
