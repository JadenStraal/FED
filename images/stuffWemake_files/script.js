// JavaScript Document
console.log("hi");
var menuButton = document.querySelector("header button");

menuButton.onclick = openMenu;

function openMenu() {
  if (menuButton.ariaExpanded == "false") {
    menuButton.ariaExpanded = "true";
  } else {
    menuButton.ariaExpanded = "false";
  }
  const menu = document.querySelector("header aside");
  menu.classList.toggle("open");
}
