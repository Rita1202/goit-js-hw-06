const ctgEl = document.querySelectorAll(".item");
const ctgLength = ctgEl.length;
console.log("Number of categories: ", ctgLength);

ctgEl.forEach((el) => {
  const titileEl = el.querySelector("h2");
  console.log(`Category: ${titileEl.textContent}`);
  const itemsEl = el.querySelectorAll("li");
  const itemsLength = itemsEl.length;
  console.log(`Elements: ${itemsLength}`);
});
