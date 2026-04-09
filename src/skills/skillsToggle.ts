export function skillsToggle() {
  const languageIcons = [
    document.getElementById('ruby'),
    document.getElementById('ts'),
    document.getElementById('js'),
    document.getElementById('python'),
    document.getElementById('perl'),
  ];

  const frameworkIcons = [
    document.getElementById('rails'),
    document.getElementById('bootstrap'),
    document.getElementById('react'),
  ];

  const toolIcons = [
    document.getElementById('html'),
    document.getElementById('css'),
    document.getElementById('sass'),
    document.getElementById('git'),
    document.getElementById('github'),
    document.getElementById('heroku'),
    document.getElementById('netlify'),
    document.getElementById('linux'),
    document.getElementById('proxmox'),
  ];

  const dbIcons = [
    document.getElementById('postgres'),
    document.getElementById('mysql'),
    document.getElementById('mariadb'),
  ];

  const iconGroups = {
    languages: languageIcons,
    frameworks: frameworkIcons,
    tools: toolIcons,
    databases: dbIcons
  };

  // skills icons toggle
  function clearFadeExpand(): void {
    Object.values(iconGroups).forEach(group => {
      group.forEach((icon) => {
        if (!icon) return;
        icon.classList.remove('fade');
        icon.classList.remove('expand');
      });
    });
  };

  // radio buttons
  const skillsRadioButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.skills-radio');

  interface RadioButtons {
    languages:  HTMLInputElement
    frameworks: HTMLInputElement
    tools:      HTMLInputElement
    databases:  HTMLInputElement
  };

  const radioButtons: RadioButtons = {
    languages: document.getElementById('languages') as HTMLInputElement,
    frameworks: document.getElementById('frameworks') as HTMLInputElement,
    tools: document.getElementById('tools') as HTMLInputElement,
    databases: document.getElementById('databases') as HTMLInputElement
  };

  skillsRadioButtons.forEach((button) => {
    button.addEventListener('click', () => {
      clearFadeExpand();
      const selected = (Object.keys(radioButtons) as Array<keyof RadioButtons>)
      .find(buttonName => radioButtons[buttonName]?.checked);
      Object.entries(iconGroups).forEach(([group, icons]) => {
        if (group !== selected) {
          icons.forEach((icon) => {
            if (icon) {
              icon.classList.add('fade')
            }
          });
        } else if (group === selected) {
          icons.forEach((icon) => {
            if (icon) {
              icon.classList.add('expand')
            }
          });
        };
      });
    });
  });
}
