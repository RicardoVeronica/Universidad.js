// traversing se puede viajar entre los nodos de padre a hijo
const navegacion = document.querySelector('#principal')

console.log(navegacion.nodeName) // etiqueta padre (nav)
console.log(navegacion.childNodes) // todos los nodos incluyendo espacios (text)
console.log(navegacion.children) // selecciona solo los nodos tag
console.log(navegacion.children[2].textContent = 'Hi!!') // seleccionar un nodo a
console.clear()

const barra = document.querySelector('.barra')

console.log(barra)
console.log(barra.children)
console.log(barra.children[0])
console.log(barra.children[0].children[0].children)
console.log(barra.children[0].children[0].children[0].children)
console.clear()

const cursos = document.querySelectorAll('.card')

console.log(cursos)
console.log(cursos[1])
console.log(cursos[1].children) // elemento imagen e info-card
console.log(cursos[1].childElementCount) // 2 imagen e info-card
console.log(cursos[1].firstElementChild) // imagen
console.log(cursos[1].lastElementChild) // infocard (con hijos)
console.log(cursos[1].lastElementChild.children)
console.log(cursos[1].lastElementChild.children[3])
console.log(cursos[1].lastElementChild.children[3].innerText = 'What the hell')
console.clear()

// traversing de hijo a padre, esto no se puede con selectores css
const enlaces = document.querySelectorAll('.enlace')

console.log(enlaces)
console.log(enlaces[0])
console.log(enlaces[0].parentNode)
console.log(enlaces[0].parentElement) // recomen para evitar nodos salto linea
console.log(enlaces[0].parentElement.parentElement.parentElement.parentElement)
console.clear()

const todosCursos = document.querySelectorAll('.card')

console.log(todosCursos[0])
console.log(todosCursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'hello from traversing')

const todosEnlaces = document.querySelectorAll('.enlace')

console.log(todosEnlaces[3])
console.log(todosEnlaces[3].previousSibling) // nodos
console.log(todosEnlaces[3].previousElementSibling.previousElementSibling) // elementos html anterior

console.log(todosEnlaces[1].nextElementSibling.nextElementSibling)
