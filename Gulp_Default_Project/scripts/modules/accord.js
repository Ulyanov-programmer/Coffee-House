var __awaiter=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function c(t){try{l(s.next(t))}catch(e){o(e)}}function a(t){try{l(s.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,a)}l((s=s.apply(t,e||[])).next())}))};import{isNullOrWhiteSpaces,sleep}from"./general.js";export default class Accordion{constructor(t,e,i,s=!0){if(this.isToggling=!1,this.buttonsActiveClass="active",this.contentActiveClass="active",isNullOrWhiteSpaces(t,e)||i<0)throw"[ACCORDION] Incorrect arguments!";if(this.buttons=document.querySelectorAll(t),this.contentElements=Array.from(document.querySelectorAll(e).values()),this.animationDuration=i+100,this.buttons.length!=this.contentElements.length)throw"[ACCORDION] The count of buttons and content-elements is not equal.";s&&(this.buttons[0].classList.add("active"),this.contentElements[0].classList.add("active"));for(let n of this.buttons)n.addEventListener("click",(()=>{this.toggleActiveElements(n)}));for(const n of this.contentElements)0==n.classList.contains("active")&&n.setAttribute("hidden","")}toggleActiveElements(t){if(t.classList.contains("active")||this.isToggling)return;this.isToggling=!0;for(let i of this.buttons)i.classList.remove("active");t.classList.add("active");let e=this.contentElements[t.dataset.toggleElemNumber];for(const i of this.contentElements)i.classList.remove("active"),setTimeout((()=>__awaiter(this,void 0,void 0,(function*(){i!=e?i.setAttribute("hidden",""):e.removeAttribute("hidden"),yield sleep(10),e.classList.add("active"),this.isToggling=!1}))),this.animationDuration)}}