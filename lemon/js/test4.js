"use strict"                                                           

function menuDrop(){
	let burger = document.getElementById("burger");

	burger.onclick = () => {
		let drop = document.getElementById("dropdown");
		let topLine = document.getElementById("span1");
		let centerLineOne = document.getElementById("span2");
		let centerLineTwo = document.getElementById("span3");
		let bottomLine = document.getElementById("span4");
		let body = document.getElementsByTagName("body")[0];

		drop.classList.toggle("drop");
		topLine.classList.toggle("topLine");
		centerLineOne.classList.toggle("centerLine");
		centerLineTwo.classList.toggle("centerLine");
		bottomLine.classList.toggle("bottomLine");
		body.classList.toggle("body-overflow");
	};
}

function getRecipe() {
	let header = document.getElementsByClassName("header")[0];
	let recipe = document.getElementById("recipe");

	header.onclick = function (event) {
		let target = event.target;

		if(target.tagName != 'BUTTON') return;
		recipe.style.display = "flex";
	}

	recipe.onclick = function (event) {
		let target = event.target;

		if(event.target.className != "recipe") return;
		recipe.style.display = "none";
	}
}

function getPlaceholder() {
	let input = document.getElementById('input');
	input.addEventListener('focus',function() {
		input.placeholder = " "
	});
	input.addEventListener('blur',function() {
		input.placeholder = "FIND A RECIPE";
	});
}

getPlaceholder()
getRecipe();
menuDrop();

