const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validationFn);

function validationFn(event) {
  if (inputEl.value.length == event.target.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
