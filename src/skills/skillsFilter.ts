// filter icons using buttons
export function skillsFilter() {
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
    languages:  languageIcons,
    frameworks: frameworkIcons,
    tools:      toolIcons,
    databases:  dbIcons
  };

  const skillsRadioButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.skills-radio');
  const skillsRadioLabels: NodeListOf<HTMLElement> = document.querySelectorAll('.radio-label');
  const skillsIconsContainer: HTMLElement | null = document.querySelector('.skills-icons');

  const clearFadeExpand = () => {
    Object.values(iconGroups).forEach(group => {
      group.forEach((icon) => {
        if (!icon) return;
        icon.classList.remove('fade');
        icon.classList.remove('expand');
      });
    });
  };

  interface RadioButtons {
    languages:  HTMLInputElement
    frameworks: HTMLInputElement
    tools:      HTMLInputElement
    databases:  HTMLInputElement
  };

  const radioButtons: RadioButtons = {
    languages:  document.getElementById('languages') as HTMLInputElement,
    frameworks: document.getElementById('frameworks') as HTMLInputElement,
    tools:      document.getElementById('tools') as HTMLInputElement,
    databases:  document.getElementById('databases') as HTMLInputElement
  };

  skillsRadioButtons.forEach((button) => {
    button.addEventListener('click', () => {
      clearFadeExpand();
      const selected = (Object.keys(radioButtons) as Array<keyof RadioButtons>)
      .find(buttonName => radioButtons[buttonName]?.checked);
      Object.entries(iconGroups).forEach(([group, icons]) => {
        icons.forEach(icon => {
          group !== selected ? icon?.classList.add('fade') : icon?.classList.add('expand');
        })
      });
    });
  });

  // reset icons if out of viewport
  const clear = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry)=> {
      if (!entry.isIntersecting) {
        clearFadeExpand()
        skillsRadioLabels.forEach(label => {
          label.style.background = 'transparent';
          label.style.color = 'vars.$dark-blue';
        })
      }
    })
  };

  const skillsObserver = new IntersectionObserver(clear);
  if (skillsIconsContainer) skillsObserver.observe(skillsIconsContainer);
}
