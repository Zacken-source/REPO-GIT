function changeValue () {
  const newValue = document.getElementById('newValue')
  const input = document.querySelector('input')
  const newContent = document.createTextNode(input.value)
  newValue.innerHTML = ''
  newValue.appendChild(newContent)
}
