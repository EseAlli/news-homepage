const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function toggleMenu() {
  nav.classList.toggle("show-menu");
});
