const header = document.querySelector(".header");

const mobileBtn = document.querySelector(".navigation__mobile");
const navigationLinks = document.querySelectorAll(".navigation__link");

navigationLinks.forEach((e) => {
  e.addEventListener("click", () => header.classList.remove("navigation-open"));
});

mobileBtn.addEventListener("click", () => {
  header.classList.toggle("navigation-open");
});
