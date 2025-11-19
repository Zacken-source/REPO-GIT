
let value = 0
function increment() {
  value = value + 1
  let div = document.getElementById("number");
  let newValue = document.createTextNode(value);
  div.innerHTML = '';
  div.appendChild(newValue);
}