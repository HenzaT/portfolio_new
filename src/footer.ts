export function footer() {
  const copyBtn = document.getElementById('copy-btn') as HTMLButtonElement;
  const copyIcon = document.getElementById('copy-icon') as HTMLElement;
  const emailAddress = document.getElementById('email-address') as HTMLAnchorElement;

  copyBtn?.addEventListener('click', () => {
    const emailText = emailAddress.textContent;
    if (copyIcon.className === 'fa-regular fa-copy footer-icon') {
      copyIcon.className = 'fa-solid fa-check footer-icon';
      emailAddress.textContent = 'email copied';
      copyBtn.setAttribute('disabled', '');
      emailAddress.style.pointerEvents = 'none';
    }
    setTimeout(() => {
      copyIcon.className = 'fa-regular fa-copy footer-icon';
      emailAddress.textContent = 'henrykun95@gmail.com'
      copyBtn.removeAttribute('disabled');
      emailAddress.style.pointerEvents = 'auto';
    }, 2000);
    navigator.clipboard.writeText(emailText);
  })
}
