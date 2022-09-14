const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfEl = ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  return itemEl;
});

const listEl = document.querySelector("#ingredients");

listEl.append(...arrayOfEl);
