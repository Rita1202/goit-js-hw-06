const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", inputFn);

function inputFn(event) {
  if (
    event.target.value.split(" ").join("") === "" ||
    event.target.value === null
  ) {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = event.target.value;
  }
}
