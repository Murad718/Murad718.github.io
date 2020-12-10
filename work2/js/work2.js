"use strict";

$(document).ready(function(){
	$(".slaider__conteiner").slick({
		dots:false,
  		speed:500,
  		fade:true,
  		autoplaySpeed:1500,
  		autoplay:true,
  		arrows:false,
  		cssEase: 'linear',
	});
});


VanillaTilt.init(document.querySelector(".header__images"), {
	max: 13,
	speed: 400
});

VanillaTilt.init(document.querySelectorAll(".main__box"), {
	max: 7,
	speed: 400
});

function logoScroll() {
	document.querySelector(".footer__logo").addEventListener("click",function() {
		window.scrollTo(0,0);
	});
}
logoScroll();


function menuOpen() {
	document.querySelector(".nav__burger").addEventListener("click",function(){
		let body = document.querySelector("body");
		body.classList.add("nav-color");
		body.classList.add("body-overflow");
		this.classList.add("active");
		document.querySelector(".nav__close").classList.add("active");
		document.querySelector(".dropdown").classList.add("active");
	});
}
menuOpen();

function menuClose() {
	document.querySelector(".nav__close").addEventListener("click",function(){
		let body = document.querySelector("body");
		body.classList.remove("nav-color");
		body.classList.remove("body-overflow");
		this.classList.remove("active");
		document.querySelector(".nav__burger").classList.remove("active");
		document.querySelector(".nav__close").classList.remove("active");
		document.querySelector(".dropdown").classList.remove("active");
	});
}
menuClose();

