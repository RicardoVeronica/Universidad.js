// agregar varios elementos al DOM con varias inserciones
// const continentes = ['America', 'Africa', 'Europa', 'Asia', 'Oceania']
// const ul = document.createElement('ul')

// continentes.forEach(function(item) {
//     const li = document.createElement('li')
//     ul.appendChild(li).textContent = item
// })

// document.body.appendChild(ul)


// Fragmentos para optimizar una sola insercion al DOM
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
const ul2 = document.createElement('ul')
const fragment = document.createDocumentFragment() // fragment

dias.forEach(function(item) {
    const li = document.createElement('li')
    li.textContent = item

    fragment.appendChild(li)
})

ul2.appendChild(fragment)
document.body.appendChild(ul2)
