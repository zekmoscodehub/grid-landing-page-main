const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#primary-navigation");
const landingCard = document.querySelector(".landing-card");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  menu.hidden = isOpen;
  landingCard.classList.toggle("menu-open", !isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.hidden) {
    menuButton.click();
    menuButton.focus();
  }
});
