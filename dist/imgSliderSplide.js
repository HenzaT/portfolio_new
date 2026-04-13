// @ts-ignore
import Splide from "../node_modules/@splidejs/splide/dist/js/splide.esm.js";
export function imgSliderSplide() {
    const spliders = [
        '#therapy-slider',
        '#song-slider',
        '#weather-slider',
        '#portfolio-slider',
        '#aptist-slider',
        '#country-slider',
        '#kanji-slider',
    ];
    spliders.forEach(splide => {
        if (document.querySelector(splide)) {
            new Splide(splide).mount();
        }
        else {
            console.warn(`Splider skipped: ${splide}`);
        }
    });
}
