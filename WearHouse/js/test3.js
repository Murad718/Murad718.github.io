 "use strict"

function DropM(){
	Burger();
	Cross();
}

function Cross(){
	let cross = document.getElementById("NavCross");
	cross.onclick = UnDrop;
}

function UnDrop(){
	let menu = document.getElementById("dropdownMenu");
	let cross = document.getElementById("NavCross");
	let burger = document.getElementById("NavBurger");

	burger.classList.remove("active");
	cross.classList.add("active");
	menu.classList.remove("active");
}

function Drop(){
	let menu = document.getElementById("dropdownMenu");
	let cross = document.getElementById("NavCross");
	let burger = document.getElementById("NavBurger");

	burger.classList.add("active");
	cross.classList.remove("active");
	menu.classList.add("active");
}

function Burger(){
	let burger = document.getElementById("NavBurger");

	burger.onclick = Drop;
}

DropM();




