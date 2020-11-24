let elemento
// const $elemento = document 
// forma correcta $ hace referencia a elemento del dom

// objeto document
elemento = document
elemento = document.header
elemento = document.body
elemento = document.all // coleccion html

// seleccionar nodos por indice
elemento = document.all[0]
elemento = document.all[1]
elemento = document.all[2]
elemento = document.all[3]
elemento = document.all[4]
elemento = document.all[5]
elemento = document.all[6]
elemento = document.all[7]
elemento = document.all[8]
elemento = document.all[9]
elemento = document.all[10]

lemento = document.URL
elemento = document.characterSet
elemento = document.forms
elemento = document.forms[0].id
elemento = document.forms[0].classList
elemento = document.forms[0].classList[0]
elemento = document.images[0]
elemento = document.images[0].id
elemento = document.images[0].classList
elemento = document.images[0].getAttribute('src')
elemento = document.scripts
elemento = document.styleSheets

let imagenes = document.images // htmlcollection
let imagesArray = Array.from(imagenes) // transformar a arreglo un htmlcollection

// for (item in imagesArray) {
//     console.log(item)
// }

// imagesArray.forEach(function(item, index) {
    // console.log(index, item)
// })

elemento = document.documentElement // etiqueta html con head y body
elemento = document.doctype
elemento = document.charset

// getAttribute, setAttribute, hasAttribute, removeAttribute
elemento = document.documentElement.lang // notacion de punto
elemento = document.documentElement.getAttribute('lang') // forma correcta

// hacer cambios a los atributos o agregar atributos
// elemento.setAttribute('target', '_blank') // agrega
document.documentElement.setAttribute('lang', 'es-MX') // modifica

console.log(document.documentElement)
