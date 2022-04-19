//? Also, TSDoc is used here, so read the tips. Try hover on some constructor.
// modal window //
import ModalWindowMenu from './modules/modalWindow.js';
/*
    It works like this:
    Finds all elements that contain data-modal-link and .modal-closer.
    The first ones trigger the event of opening the modal window, the second ones close it.
    After clicking on one of these elements,
    it looks for a block with a name inside data-modal-link and gives it the "active" class.

    Also, when pressed, turns off the scrolling page.
*/
new ModalWindowMenu({
    modalLinksSelector: '[data-modal-link]',
    modalClosersSelector: '.modal-closer',
    transitionTimeout: 500,
});
// sidebar //
import SidebarMenu from './modules/sidebar.js';
new SidebarMenu('.sidebar', '.toggle-sidebar');
SidebarMenu.sidebarsActiveClass = 'active';
SidebarMenu.buttonsActiveClass = 'active';
// SwipeMenu //
import SwipeElement, { ChangePlane } from "./modules/swipeMenu.js";
new SwipeElement({
    touchStartAreaSelector: '.sidebar-swipe-wrapper',
    swipableElementSelector: '#sidebar',
    changePlane: ChangePlane.ToLeft,
    swipeSensitivity: 0.5,
});
//? your scripts //
let counter = document.querySelector('#productCounter');
let decreaser = document.querySelector('#decreaser');
let increaser = document.querySelector('#increaser');
decreaser ? decreaser.addEventListener('click', decraseCounterValue) : false;
increaser ? increaser.addEventListener('click', increaseCounterValue) : false;
function decraseCounterValue() {
    let counterValue = parseInt(counter.value);
    counterValue = counterValue - parseInt(counter.step);
    counterValue >= 1 ? counter.value = `${counterValue}` : false;
}
function increaseCounterValue() {
    let counterValue = parseInt(counter.value);
    counterValue = counterValue + parseInt(counter.step);
    counterValue >= 1 ? counter.value = `${counterValue}` : false;
}
let prevButton = document.querySelector('.menu-slider__prev');
let nextButton = document.querySelector('.menu-slider__next');
let menuSlider = document.querySelector('.menu-slider__slider');
const heightOfMenuButton = document.querySelector('.menu-element').clientHeight;
prevButton ? prevButton.addEventListener('click', scrollMenuToPrev) : false;
nextButton ? nextButton.addEventListener('click', scrollMenuToNext) : false;
function scrollMenuToPrev() {
    let scrollValue = heightOfMenuButton * -1;
    menuSlider.scrollBy(0, scrollValue);
}
function scrollMenuToNext() {
    menuSlider.scrollBy(0, heightOfMenuButton);
}
