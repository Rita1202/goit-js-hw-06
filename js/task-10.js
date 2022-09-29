function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
inputEl.addEventListener("input", onInputHandler);

function onInputHandler() {
  return inputEl.value;
}

const createdEl = document.querySelector("[data-create]");
createdEl.addEventListener("click", onBntCreatedBoxesClick);

function onBntCreatedBoxesClick() {
  createBoxes(onInputHandler());
}

const boxesEl = document.querySelector("#boxes");
boxesEl.classList.add("main-box");

let side = 20;

function createBoxes(amount) {
  const array = [];
  for (let index = 0; index < amount; index++) {
    side += 10;
    const divMakup = `<div style='width: ${side}px; height:${side}px; background-color: ${getRandomHexColor()}'></div>`;
    array.push(divMakup);
  }

  const string = array.join("");
  boxesEl.insertAdjacentHTML("beforeend", string);
}

const dectroyEl = document.querySelector("[data-destroy]");
dectroyEl.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
  side = 20;
}

// const element = array[index];
// const boxesEl = document.querySelector("#boxes");
// console.log(boxesEl);
// const newBoxEl = document.createElement("div");
// side += 10;
// newBoxEl.style.width = side + "px";
// newBoxEl.style.height = side + "px";
// newBoxEl.style.backgroundColor = getRandomHexColor();
// boxesEl.append(newBoxEl);
