$(document).ready(function(){
	$(".step__slider").slick({
		dots:true,
  		adaptiveHeight:true,
  		speed:500,
  		arrows:false,
  		easing:"ease",
	});
	$(".team__slaider").slick({
		adaptiveHeight:true,
  		speed:500,
  		arrows:true,
  		easing:"ease",
  		slidesToShow:3,
  		autoplaySpeed:1500,
  		autoplay:true,
  		responsive:[
  			{
  				breakpoint:1024,
  				settings:{
  					slidesToShow:2,
  				}
  			},
  			{
  				breakpoint:510,
  				settings:{
  					slidesToShow:1,
  				}
  			},
  		],
	});
	$(".reviews__slaider").slick({
		speed:500,
		easing:"ease",
	});
});

function accordions() {
	let open = document.querySelectorAll(".questions__close");
	for(let key of open) {
		key.addEventListener("click",function(event) {
			let id =  this.dataset.close;
			this.classList.toggle("questions-acord-rotate");
			document.getElementById(id).classList.toggle("questions-acord");
		});
	}
}
accordions();

function burger() {
	let burger = document.querySelector(".nav__burger");
	burger.addEventListener("click",function(){
		burger.classList.toggle("active");
	});
}
burger();

function addres() {
	let town = document.querySelectorAll(".contact__link");

	for(let link of town) {
		link.addEventListener("click",function(event) {
			for(let key of town) {
				key.classList.remove("town"); 
			}

			if(event.target.classList.contains("moscow")) {
				event.target.classList.add("town");
				document.querySelector(".img-town").src = "pictures/moscow.png"
				document.querySelector(".map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.571379782588!2d37.493691815917025!3d55.8353985805755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5481c138b4b81%3A0x9103ae68335f2e68!2z0YPQuy4g0JDQtNC80LjRgNCw0LvQsCDQnNCw0LrQsNGA0L7QstCwLCA2LCDQnNC-0YHQutCy0LAsIDEyNTIxMg!5e0!3m2!1sru!2sru!4v1604762226009!5m2!1sru!2sru"
				document.querySelector(".adress")
				.innerHTML = `<div class="ad">Г. Москва, ул. Адмиала Макарова д. 6 стр. 13</div><br><a href="tel:+7(977)503-63-26">+7(977)503-63-26</a><br/><a href="mailto:kjuliank@mail.ru">kjuliank@mail.ru</a>`;
			} else {
				event.target.classList.add("town");
				document.querySelector(".img-town").src = "pictures/cazan.png";
				document.querySelector(".map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7998.238538667555!2d49.10207790950241!3d55.76840621927662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eacf835dc46bf%3A0x75cc95fec6f2429!2z0YPQuy4g0JzQsNC30LjRgtCwINCT0LDRhNGD0YDQuCwgNDgsINCa0LDQt9Cw0L3RjCwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwgNDIwMTA4!5e0!3m2!1sru!2sru!4v1604760850611!5m2!1sru!2sru";
				document.querySelector(".adress")
				.innerHTML = `Г. Казань, ул. Мазита Гафури 48<br><a href="tel:+7(905)310-72-30">+7(905)310-72-30</a><br><a href="mailto:dkolesx@mail.ru">dkolesx@mail.ru</a>`;
			}
		});
	}
}
addres();

function scrollSection() {
	let links = document.querySelectorAll(".scroll-link");
	for(let link of links){
		link.addEventListener("click",function(){
			let id = link.dataset.scroll;
			document.getElementById(id).scrollIntoView({
				block:"start",
			});;
			window.scrollBy(0,-90);
		});
	}
}
scrollSection();


function popUp(){
	let links = document.querySelectorAll(".pop-link");
	for(let link of links){
		link.addEventListener("click",function(){
			document.querySelector(".pop").style.transform = "scale(1)";

		});
	}
	document.querySelector(".pop__overflow").addEventListener("click",function(){
		document.querySelector(".pop").style.transform = "scale(0)";	
	});
}
popUp();

function dropdown() {
	document.querySelector(".nav__burger").addEventListener("click",function(){
		document.querySelector(".dropdown").classList.toggle("drop-menu");
	});
}
dropdown();

function video() {
	let play = document.querySelectorAll(".reviews__elipse");
	for(key of play) {
		key.addEventListener("click",function(){
			this.style.display = "none";
			this.previousElementSibling.play();
		});
	} 
}
video();

function videoClose() {
	let video = document.querySelectorAll(".reviews__video");
	for(key of video) {
		key.addEventListener("click",function(){
			this.pause();
			this.nextElementSibling.style.display = "flex";
		});
	} 
}
videoClose();

function parralax() {
	if(document.documentElement.clientWidth > 768){
			document.addEventListener("mousemove", function(event) {
			let items = document.querySelectorAll(".parallax");
			let itemsRev = document.querySelectorAll(".parallax-revers");
			itemsRev.forEach(item => {
				item.style.transform = `translateX(-${event.clientX*item.dataset.speed/1000}px) translateY(-${event.clientY/100}px)`;
			});
			items.forEach(item => {
				item.style.transform = `translateX(${event.clientX*item.dataset.speed/1000}px) translateY(${event.clientY/100}px)`;
			});
		});
	} else {
		return;
	}
}
parralax();

function workHidden() {
	document.querySelector(".works__button").addEventListener("click", function() {
		let works = document.querySelector(".works__hidden");
		works.classList.toggle("works-display");
	});
}
workHidden();

let test = {
	circles:true,
	value:false,
	number:1,
	valid() {
		let circles = document.querySelectorAll(".test__circle");
		let self = this;
		for(let key of circles) {
			key.addEventListener("click",function(event){
				if(self.circles == false) return;
				circles.forEach(key => key.classList.remove("circle-bg"));
				this.classList.add("circle-bg");
				self.value = true;
			});
		}
	},
	open(){
		let self = this;
		let btn = document.querySelector(".test__button");
		let length = document.querySelectorAll(".test__questions").length;
		btn.addEventListener("click",function(){
			if(self.value == false) return;
			self.number += 1;
			if(self.number < length+1){
				document.querySelectorAll(".test__number").forEach(key => key.innerHTML =`${self.number}/5`);
				document.querySelectorAll(".test__questions").forEach(key => key.classList.add("test__hidden"));
				document.querySelector(`#q${self.number}`).classList.remove("test__hidden");
				self.value = false;
			}else{
				document.querySelectorAll(".test__circle").forEach(key => key.classList.remove("circle-bg"));
				document.querySelector(".form").style.transform = "scale(1)";
				self.value = false;
				self.circles = false;
			}
		});
		document.querySelector(".form__overflow").addEventListener("click",function(){
			document.querySelector(".form").style.transform = "scale(0)";	
		});
	},
}
test.valid();
test.open();