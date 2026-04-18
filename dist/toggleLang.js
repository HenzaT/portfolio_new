export function toggleLang() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            let htmlLang = document.documentElement;
            htmlLang.getAttribute('lang') === 'ja' ? htmlLang.setAttribute('lang', 'en') : htmlLang.setAttribute('lang', 'ja');
            document.body.classList.toggle('ja-mode');
            langBtn.textContent = langBtn.textContent === '日本語' ? 'English' : '日本語';
        });
    }
}
