const hambuger = document.querySelector(".hamburger-btn");
const navbar = document.querySelector(".nav-bar");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navbar.classList.toggle("active");
});
