import{isNullOrWhiteSpaces}from"./general.js";export default class SidebarMenu{constructor(e,t){if(isNullOrWhiteSpaces(e,t))throw"[SIDEBAR] Some selector is null or white spaces!";this.sidebars=document.querySelectorAll(e),this.sidebarButtons=document.querySelectorAll(t);for(let s of this.sidebarButtons)s.addEventListener("click",(()=>this.toggleSidebar(s)))}toggleSidebar(e){let t=document.getElementById(e.dataset.openSidebar);e.classList.toggle(SidebarMenu.buttonsActiveClass),t.classList.toggle(SidebarMenu.sidebarsActiveClass),document.querySelector("main").classList.toggle("paranja")}}SidebarMenu.sidebarsActiveClass="active",SidebarMenu.buttonsActiveClass="active";