console.log("oui");
let premierLi = document.getElementById("first");
let newDiv = document.createElement("div");

let text = document.createTextNode('voici une div');

newDiv.appendChild(text);
premierLi.appendChild(newDiv);

let liste = document.querySelector("li");

liste.classList.add("style-vert");