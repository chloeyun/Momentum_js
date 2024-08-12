const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const time = document.querySelector("#clock");
const saying = document.querySelector("#quote");
const sky = document.querySelector("#weather");
const todo = document.querySelector("#todo-form");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  console.log("Form Submitted");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

//Set the repetitive lines into function
function paintGreetings(username) {
  const hour = new Date().getHours(); //access hour from the global window object
  let chosenGreet;
  if (hour >= 7 && hour < 11) {
    chosenGreet = "Good morning,";
  } else if (hour >= 11 && hour < 18) {
    chosenGreet = "Good afternoon, ";
  } else if (hour >= 18 && hour < 22) {
    chosenGreet = "Good evening, ";
  }

  greeting.innerText = `${chosenGreet} ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  time.classList.remove(HIDDEN_CLASSNAME);
  saying.classList.remove(HIDDEN_CLASSNAME);
  sky.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

//If name does not exist : show the form and get the item

console.log(savedUserName);

if (savedUserName === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
}
//If name alrdy exist :show the greetings
else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUserName);
}
