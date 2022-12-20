const button = document.querySelector(".button");
const links = document.querySelector(".nav__links");

button.addEventListener("click", () => {
	links.classList.toggle("active");
});
