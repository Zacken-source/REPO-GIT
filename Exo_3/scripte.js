function changeValue(){
    let newValue = document.getElementById("newValue");
    let input = document.querySelector("input");
    let newContent = document.createTextNode(input.value);
    newValue.innerHTML = "";
    newValue.appendChild(newContent);
}