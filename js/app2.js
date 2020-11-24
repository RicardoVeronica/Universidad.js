document.querySelector('#submit-buscador').addEventListener('click', myfunc)

function myfunc(event) {
    event.preventDefault() // prevenir la accion por default del elemento

    console.log(event) // para buscar el target
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.target.className)

}

// Local storage y Session storage
localStorage.setItem('nombre', 'setcain')
sessionStorage.setItem('name', 'Ricardo')


const nombre = localStorage.getItem('nombre')
console.log(nombre)
const name = sessionStorage.getItem('name')
console.log(name)

localStorage.removeItem('nombre')
sessionStorage.removeItem('name')
