console.log('oui')
const premierLi = document.getElementById('first')
const newDiv = document.createElement('div')

const text = document.createTextNode('voici une div')

newDiv.appendChild(text)
premierLi.appendChild(newDiv)

const liste = document.querySelector('li')

liste.classList.add('style-vert')
