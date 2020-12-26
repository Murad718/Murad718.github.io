"use strict"

$(document).ready(function(){
	$('.client__slider').slick({
  		dots:true,
  		adaptiveHeight:true,
  		autoplay:true,
  		arrows:false,
  		infinite:false,
  		speed:500,
  		autoplaySpeed:2000,
  		easing:"ease",
	});
});


function burger() {
	let burger = document.querySelector(".header__burger");
	let menu = document.querySelector(".dropdown");
	burger.addEventListener("click",function(){
		burger.classList.toggle("active");
		menu.classList.toggle("active");
	});
}
burger();
function fixedNav() {
	let nav = document.querySelector(".header__nav");
	let links = document.querySelectorAll(".header__list .header__link");
	let logo = document.querySelector(".header__logo");
		window.addEventListener('scroll', function() {
			if(pageYOffset > 2){
				nav.style.background = "#fff";
				logo.src = "img/logo-dark.png";
				for(let link of links){
					link.style.color = "#000";
				}
			}else{
				nav.style.background = "transparent";
				if(document.documentElement.clientWidth < 768){
					logo.src = "img/logo-dark.png";
				}
				else{
					logo.src = "img/logo(1).png";
				}
				for(let link of links){
					link.style.color = "#fff";
				}
			}
		});
}
fixedNav();

function scrollSection() {
	let links = document.querySelectorAll(".header__link");
	for(let link of links){
		link.addEventListener("click",function(){
			let id = link.dataset.scroll;
			document.getElementById(id).scrollIntoView({
				block:"start",
				behavior: "smooth"
			});;
		});
	}
}
scrollSection();

function tabs() {
	document.querySelector(".works__tabs").addEventListener("click",function(event) {
		if(event.target.classList.contains("works__tab")){
			let tabs = document.querySelectorAll(".works__tab");
			let items = document.querySelectorAll(".works__item");
			for(let tab of tabs){
				if(tab.classList.contains("color-bg")){
					tab.classList.remove("color-bg");
				}
			}
			event.target.classList.add("color-bg");
			let atrr = event.target.dataset.tab;
			for(let item of items){
				if(item.classList.contains(atrr)){
					item.style.position = "relative";
					item.style.transform = "scale(1)";
					item.style.opacity = "1";
				}else{
					item.style.transform = "scale(0)";
					item.style.opacity = "0";
					setTimeout(function(){
						item.style.position = "absolute";
					},600)
				}
			}
		}else{
			return
		}
	});
}
tabs();

