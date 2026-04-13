export function footer() {
    const copyBtn = document.getElementById('copy-btn');
    const copyIcon = document.getElementById('copy-icon');
    const emailAddress = document.getElementById('email-address');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const emailText = emailAddress.textContent;
            if (copyIcon.className === 'fa-regular fa-copy') {
                copyIcon.className = 'fa-solid fa-check';
                emailAddress.textContent = 'email copied';
                copyBtn.setAttribute('disabled', '');
                emailAddress.style.pointerEvents = 'none';
            }
            setTimeout(() => {
                copyIcon.className = 'fa-regular fa-copy';
                emailAddress.textContent = 'henrykun95@gmail.com';
                copyBtn.removeAttribute('disabled');
                emailAddress.style.pointerEvents = 'auto';
            }, 2000);
            navigator.clipboard.writeText(emailText);
        });
    }
}
