let elemento

elemento = document.getElementById('encabezado')
elemento = document.getElementById('encabezado').id
elemento = document.getElementById('encabezado').className
elemento = document.getElementById('encabezado').classList
elemento = document.getElementById('encabezado').textContent
elemento = document.getElementById('encabezado').innerHTML
elemento = document.getElementById('encabezado').innerText

// cambiar css con js
elemento = document.getElementById('encabezado')
elemento.style.backgroundColor = '#333'
elemento.style.color = '#FFF'
elemento.style.padding = '1em'

// cambiar html con js
elemento.textContent = 'hello'
elemento.innerHTML = 'world'
elemento.innerText = 'hello world'

// eliminar elemento
// elemento.remove()

// escribir en el document, no es html aunque escribas en tags
document.write('hello world')

// selector css
elemento = document.querySelectorAll('#principal a:first-child')
elemento = document.querySelectorAll('#principal a:nth-child(2)')
elemento = document.querySelectorAll('#principal a:nth-child(3)')
elemento = document.querySelectorAll('#principal a:nth-child(4)')
elemento = document.querySelectorAll('#principal a:last-child')
elemento = document.querySelectorAll('#principal .enlace')

elemento[1].style.backgroundColor = 'black'
elemento[1].innerHTML = 'hello world'
elemento[1].innerText = 'hello world'
elemento[1].innerContent = 'hello world'

elemento = document.querySelectorAll('#principal a:nth-child(even)') // pares
elemento = document.querySelectorAll('#principal a:nth-child(odd)') // impares

elemento.forEach(function(item) {
    item.style.backgroundColor = 'black'
    item.style.color = 'white'
})

console.log(elemento)
