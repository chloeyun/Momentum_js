const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");
  h1.innerText = `Hello ${userName}`;
  h1.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
