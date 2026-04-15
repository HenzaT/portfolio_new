// @ts-ignore
// import Splide from "@splidejs/splide/dist/js/splide.esm.js";
import Splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.esm.js";

export function imgSliderSplide() {
  const spliders: string[] = [
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
    } else {
      console.warn(`Splider skipped: ${splide}`);
    }
  })
}
