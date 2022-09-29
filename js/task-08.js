const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", getUserInfo);

function getUserInfo(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    alert("All fields must be filled in");
  } else {
    const userInfo = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    console.log(userInfo);

    event.currentTarget.reset();
  }
}
