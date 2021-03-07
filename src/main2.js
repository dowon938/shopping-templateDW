'use strict';

//Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((jason) => jason.items);
}

//Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTML(item)).join('');
}

//Create HTML List item from the given data item
function createHTML(item) {
  return `
  <li class="item">
  <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
  <span class = "item__description"> ${item.gender}, ${item.size} size </span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  console.log(dataset);
  if (key === null || value === null) {
    return;
  }
  // updateItems(items, key, value);
  const filtered = items.filter((item) => item[key] === value);
  displayItems(filtered);
}

// function updateItems(items, key, value) {
//   items.forEach((item) => {
//     if (item.dataset[key] === value) {
//       item.classList.remove("invisible");
//     } else {
//       item.classList.add("invisible");
//     }
//   });
// }
function setEventListeners(items) {
  const logoBtn = document.querySelector('.logo');
  const categories = document.querySelector('.categories');
  logoBtn.addEventListener('click', () => displayItems(items));
  categories.addEventListener('click', (event) => onButtonClick(event, items));
}

//main
loadItems()
  .then((items) => {
    // console.log(items);
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
