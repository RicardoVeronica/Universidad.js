const enlaces = document.getElementById('secundaria')

const nuevoEnlace = document.createElement('a')
nuevoEnlace.className = ('enlace')
nuevoEnlace.setAttribute('href', 'https://setcain.com')
nuevoEnlace.setAttribute('target', '_blank')
// Metodo clasico agregar texto a elemento
nuevoEnlace.innerHTML = 'setcain.com'
// Nuevo metodo agregar metodo a elemento
nuevoEnlace.insertAdjacentHTML("afterbegin", 'insertAdjacentHTML')

// Agregar al final (default)
// enlaces.appendChild(nuevoEnlace)

// Agregar antes
// enlaces.insertBefore(nuevoEnlace, enlaces.firstElementChild)

// Reemplazar nuevo, viejo
// enlaces.replaceChild(nuevoEnlace, enlaces.children[1])

// Eliminar
// enlaces.removeChild(enlaces.lastElementChild)

// Clonar elementos completos
// const clonarEnlaces = enlaces.cloneNode(true)
// document.body.appendChild(clonarEnlaces)


/*
 * Nuevos metodos para insertar elementos en el DOM
 * .insertAdjacent
 * .insertAdjacentElement(position, el) como appendChild
 * .insertAdjacentHTML(position, html) como innerHTML agrega contenido html
 * .insertAdjacentText(position, text) como innerText agrega texto simple
 * position
 * beforebegin(hermano anterior)
 * afterbegin(primer hijo)
 * beforeend(ultimo hijo)
 * afterend(hermano siguiente)
 *
 * .before (hermano anterior)
 * .after (hermano posterior)
 * .prepend (primer hijo)
 * .append (ultimo hijo)
 * */


// enlaces.insertAdjacentElement("beforebegin", nuevoEnlace) // hermano anterior
// enlaces.before(nuevoEnlace) // hermano anterior forma sencilla

// enlaces.insertAdjacentElement("afterbegin", nuevoEnlace) // primer hijo
// enlaces.prepend(nuevoEnlace) // primer hijo forma sencilla

// enlaces.insertAdjacentText("afterend", "insertAdjacentText") // inserta texto plano

// enlaces.insertAdjacentElement("beforeend", nuevoEnlace) // ultimo hijo
// enlaces.append(nuevoEnlace) // ultimo hijo forma sencilla

// enlaces.insertAdjacentElement("afterend", nuevoEnlace) // hermano siguiente
// enlaces.after(nuevoEnlace) // hermano siguiente forma sencilla

console.log(enlaces)

cons perro = console.log('hello')
