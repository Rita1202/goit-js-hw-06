let counterValue = 0;

const valueEl = document.querySelector("#value");
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

decrementEl.addEventListener("click", decrementFn);

function decrementFn() {
  counterValue += -1;
  valueEl.textContent = counterValue;
}

incrementEl.addEventListener("click", incrementFn);

function incrementFn() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
