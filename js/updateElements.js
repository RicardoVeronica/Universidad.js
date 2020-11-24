// crear elementos en el dom
const enlace = document.createElement('a')
enlace.className = 'enlace'
enlace.id = 'enlace-creado'
enlace.innerHTML = 'Google'
enlace.setAttribute('href', 'http://google.com')

document.querySelector('#secundaria').appendChild(enlace)

console.log(enlace)
console.clear()


// reemplazar elementos
const nuevoEncabezado = document.createElement('h2') // elemento nuevo
const encabezadoAnterior = document.querySelector('#encabezado') // elemento anterior
const elementoPadre = document.querySelector('#lista-cursos') // padre del elemento a cambiar

// agregar atributos
nuevoEncabezado.id = 'nuevo-encabezado'
nuevoEncabezado.innerHTML = 'Nuevo encabezado'

// reemplazar nuevo por anterior
elementoPadre.replaceChild(nuevoEncabezado, encabezadoAnterior)

console.log(nuevoEncabezado)
console.clear()

// eliminar elementos
const allEnlaces = document.querySelectorAll('.enlace')
const navegacion = document.querySelector('#principal')

// allEnlaces[0].remove()
navegacion.removeChild(allEnlaces[0])

// modificar clases y atributos
const primerEnlace = document.querySelectorAll('.enlace')[2]
let element

element = primerEnlace.className // obtiene las clases del elemento
alement = primerEnlace.classList.add('nueva-clase')
alement = primerEnlace.classList.add('nueva-clase-dos')
alement = primerEnlace.classList.remove('nueva-clase-dos')
element = primerEnlace.classList // obtiene las clases en una lista

element = primerEnlace.getAttribute('href') // obtine atributo
element = primerEnlace.setAttribute('href', 'http://facebook.com') // agrega atributo
element = primerEnlace.getAttribute('href')
element = primerEnlace.removeAttribute('href') // elimina atributos
element = primerEnlace.hasAttribute('href') // comprueba si tiene un atributo, boolean

console.log(element)
