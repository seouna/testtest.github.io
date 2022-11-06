const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting1 = document.querySelector("#greeting1");
const greeting2 = document.querySelector("#greeting2");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){

  //event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreetings();

}

function paintGreetings(username){
  greeting1.innerText = `${savedUsername}'s`;
  greeting2.innerText = `📋 TO DO LIST `;
  
  greeting1.classList.remove(HIDDEN_CLASSNAME);
  greeting2.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintGreetings();  
}
