import { SlideNav } from './slide.js';
const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev-slide', '.next-slide');
slide.addControl('.custom-controls');