// toggle between English and Japanese
export function toggleLang() {
  const langBtn = document.getElementById('lang-btn') as HTMLButtonElement;

  langBtn?.addEventListener('click', () => {
    console.log('lang clicked');
    let htmlLang = document.documentElement;
    htmlLang.getAttribute('lang') === 'ja' ? htmlLang.setAttribute('lang', 'en') : htmlLang.setAttribute('lang', 'ja');
    document.body.classList.toggle('ja-mode');
    langBtn.textContent = htmlLang.getAttribute('lang') === 'ja' ? 'English' : '日本語';
  })
}
