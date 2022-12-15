const button = document.querySelector(".button");
const links = document.querySelector(".nav__links");

const form = document.getElementById("form");
const forSend = document.getElementById("forSend");

button.addEventListener("click", () => {
	links.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
	console.log("hola");
	e.preventDefault();
});
