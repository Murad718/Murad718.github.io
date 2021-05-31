"use strict"

VanillaTilt.init(document.querySelector(".main__images"), {
	max: 13,
	speed: 400
});

let menu = {
	cursorAnimate(){
		const elems = document.querySelectorAll(".animate-elem");
		const animateElem = document.querySelector(".animate__cursor");
		const animateElemClick = document.querySelector(".animate__click");
		const leftSubtraction = animateElem.getBoundingClientRect().left;
		for(let elem of elems){
			elem.addEventListener("mouseover",function(){
				let left = this.getBoundingClientRect().left;
				let width = this.offsetWidth;
				animateElem.style.left = `${left-leftSubtraction-5}px`;
				animateElem.style.width = `${width}px`;
				animateElem.style.opacity = `0.9`;
			});
			elem.addEventListener("click",function(event){
				event.preventDefault();
				let left = this.getBoundingClientRect().left;
				let width = this.offsetWidth;
				animateElemClick.style.left = `${left-leftSubtraction-5}px`;
				animateElemClick.style.width = `${width}px`;
				animateElemClick.style.opacity = `0.9`;
			});
		}
	},
	init(){
		this.cursorAnimate();
	}
}

menu.init();


