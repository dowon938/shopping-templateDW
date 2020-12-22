"use strict";

loadItems();

const shoppingContainer = document.querySelector(".shopping__container");
const categories = document.querySelector(".categories");

const itemWindow = document.querySelector(".item-window");
const allItemInWidow = document.querySelectorAll(".item-window div");
const allTshirts = document.querySelectorAll(".t-shirts");
const allPants = document.querySelectorAll(".pants");
const allSkirts = document.querySelectorAll(".skirts");
const allBlue = document.querySelectorAll(".blue");
const allYellow = document.querySelectorAll(".yellow");
const allPink = document.querySelectorAll(".pink");

shoppingContainer.addEventListener("click", (event) => {
  const target = event.target;
  switch (target.className || target.parentNode.className) {
    case "clothes__t-shirts":
      allItemHide();
      flexItem(allTshirts);
      break;
    case "clothes__pants":
      allItemHide();
      flexItem(allPants);
      break;
    case "clothes__skirts":
      allItemHide();
      flexItem(allSkirts);
      break;
    case "colors__blue":
      allItemHide();
      flexItem(allBlue);
      break;
    case "colors__yellow":
      allItemHide();
      flexItem(allYellow);
      break;
    case "colors__pink":
      allItemHide();
      flexItem(allPink);
      break;
    case "logo":
      allItemHide();
      flexItem(allItemInWidow);
      break;
    default:
      break;
  }
  console.log(event.target.className);
  console.log(event.target.parentNode.className);
});

function allItemHide() {
  allItemInWidow.forEach((element) => {
    element.style.display = "none";
  });
}

function flexItem(item) {
  item.forEach((element) => {
    element.style.display = "flex";
  });
}
