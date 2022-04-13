import{isNullOrWhiteSpaces}from"./general.js";var SwipeSide,ChangeOrientation;!function(t){t[t.Top=0]="Top",t[t.Left=1]="Left",t[t.Bottom=2]="Bottom",t[t.Right=3]="Right"}(SwipeSide||(SwipeSide={}));export var ChangePlane;!function(t){t[t.ToLeft=0]="ToLeft",t[t.ToRight=1]="ToRight",t[t.ToTop=2]="ToTop",t[t.ToBottom=3]="ToBottom"}(ChangePlane||(ChangePlane={})),function(t){t[t.Vertical=0]="Vertical",t[t.Horizontal=1]="Horizontal"}(ChangeOrientation||(ChangeOrientation={}));export default class SwipeElement{constructor(t){if(this.startX=0,this.startY=0,this.deltaX=0,this.deltaY=0,this.pointerMoveHandler=function(t){this.swipableElement.style.userSelect="none",this.swipeMove(t)}.bind(this),this.pointerUpHandler=function(){this.swipableElement.style.userSelect="",this.swipeEnd(0,!1,!0)}.bind(this),isNullOrWhiteSpaces(t.touchStartAreaSelector,t.swipableElementSelector))throw new Error("[SWIPE-ELEMENT Some selector is null or white spaces!]");this.touchAreaElement=document.querySelector(t.touchStartAreaSelector),this.touchAreaElement.style.touchAction="none",this.swipableElement=document.querySelector(t.swipableElementSelector),this.elementStartX=this.getTranslateState("x"),this.elementStartY=this.getTranslateState("y"),this.swipeSensitivity=t.swipeSensitivity,this.baseXStateModifier=this.checkBaseStateIsNegative("x")?-1:1,this.baseYStateModifier=this.checkBaseStateIsNegative("y")?-1:1,this.minSwipeWidth=Math.trunc(this.swipableElement.clientWidth*this.swipeSensitivity),this.minSwipeHeight=Math.trunc(this.swipableElement.clientHeight*this.swipeSensitivity),this.changePlane=t.changePlane,this.changePlane==ChangePlane.ToLeft||this.changePlane==ChangePlane.ToRight?this.changeOrientation=ChangeOrientation.Horizontal:this.changeOrientation=ChangeOrientation.Vertical,this.touchAreaElement.addEventListener("pointerdown",(t=>{0==t.button&&(this.swipeStart(t),window.addEventListener("pointermove",this.pointerMoveHandler,!1),window.addEventListener("pointerup",this.pointerUpHandler,!1))}),!1)}swipeStart(t){this.startX=t.clientX,this.startY=t.clientY}swipeMove(t){this.changeOrientation==ChangeOrientation.Horizontal?(this.deltaX=this.startX-t.clientX,this.currentSide=this.deltaX>=0?SwipeSide.Left:SwipeSide.Right,this.deltaX=Math.abs(this.deltaX),this.moveX()):this.changeOrientation==ChangeOrientation.Vertical&&(this.deltaY=this.startY-t.clientY,this.currentSide=this.deltaY>=0?SwipeSide.Top:SwipeSide.Bottom,this.deltaY=Math.abs(this.deltaY),this.moveY())}swipeEnd(t,e,i){if((this.changeOrientation==ChangeOrientation.Horizontal&&t>this.minSwipeWidth||this.changeOrientation==ChangeOrientation.Vertical&&t>this.minSwipeHeight)&&(e?this.swipableElement.classList.add("active"):this.swipableElement.classList.remove("active"),this.touchAreaElement.classList.toggle("active"),this.swipableElement.style.transform="",window.removeEventListener("pointermove",this.pointerMoveHandler,!1)),i){this.swipableElement.style.transform="",window.removeEventListener("pointermove",this.pointerMoveHandler,!1);let t=document.querySelector("main");this.swipableElement.classList.contains("active")?t.classList.add("paranja"):t.classList.remove("paranja")}}moveX(t=this.deltaX){if(this.checkSwipableElementContainActive()){if(this.changePlane==ChangePlane.ToLeft&&this.currentSide==SwipeSide.Left)return;if(this.changePlane==ChangePlane.ToRight&&this.currentSide==SwipeSide.Right)return;let e=`${this.changePlane==ChangePlane.ToLeft?"+":"-"}${t}`;this.swipableElement.style.transform=`translate3d(\n\t\t\t\t${e}px,\n\t\t\t\t${this.getTranslateState("Y")}px, \n\t\t\t\t0)`,this.swipeEnd(t,!1)}else{if(this.changePlane==ChangePlane.ToLeft&&this.currentSide==SwipeSide.Right)return;if(this.changePlane==ChangePlane.ToRight&&this.currentSide==SwipeSide.Left)return;let e=this.elementStartX-t*this.baseXStateModifier;this.swipableElement.style.transform=`translate3d(\n\t\t\t\t${e}px, \n\t\t\t\t${this.getTranslateState("Y")}px, \n\t\t\t\t0)`,this.swipeEnd(t,!0)}}moveY(t=this.deltaY){if(this.checkSwipableElementContainActive()){if(this.changePlane==ChangePlane.ToTop&&this.currentSide==SwipeSide.Top)return;if(this.changePlane==ChangePlane.ToBottom&&this.currentSide==SwipeSide.Bottom)return;let e=`${this.changePlane==ChangePlane.ToBottom?"-":"+"}${t}`;this.swipableElement.style.transform=`translate3d(\n\t\t\t\t${this.getTranslateState("x")}px, \n\t\t\t\t${e}px, \n\t\t\t\t0)`,this.swipeEnd(t,!1)}else{if(this.changePlane==ChangePlane.ToBottom&&this.currentSide==SwipeSide.Top)return;if(this.changePlane==ChangePlane.ToTop&&this.currentSide==SwipeSide.Bottom)return;let e=this.elementStartY-t*this.baseYStateModifier;this.swipableElement.style.transform=`translate3d(\n\t\t\t\t${this.getTranslateState("x")}px, \n\t\t\t\t${e}px, \n\t\t\t\t0)`,this.swipeEnd(t,!0)}}getTranslateState(t="x"){let e="x"==t?4:5;return parseInt(window.getComputedStyle(this.swipableElement).getPropertyValue("transform").match(/(-?[0-9\.]+)/g)[e])}checkBaseStateIsNegative(t="x"){return!(this.getTranslateState(t)>=0)}checkSwipableElementContainActive(){return this.swipableElement.classList.contains("active")}}