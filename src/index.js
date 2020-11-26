const $carrito = document.querySelector("#lista-carrito tbody");
let articulosCarrito = [];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("agregar-carrito")) {
    agregarCarrito(e);
  }

  if (e.target.classList.contains("borrar-curso")) {
    borrarCurso(e);
  }

  if (e.target.matches("a#vaciar-carrito")) {
    articulosCarrito = [];
    limpiarHTML();
  }
});

function agregarCarrito(e) {
  e.preventDefault();

  const $card = e.target.parentElement.parentElement;

  leerDatosCurso($card);
}

function leerDatosCurso($card) {
  const curso = {
    image: $card.querySelector("img").src,
    title: $card.querySelector("h4").innerText,
    price: $card.querySelector(".precio span").innerText,
    id: $card.querySelector(".agregar-carrito").getAttribute("data-id"),
    counter: 1,
  };

  const exist = articulosCarrito.some((el) => el.id === curso.id);
  if (exist) {
    const cursos = articulosCarrito.map((el) => {
      if (el.id === curso.id) {
        el.counter++;
        return el;
      } else {
        return el;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, curso];
  }

  carritoCursos();
}

function carritoCursos() {
  limpiarHTML();

  articulosCarrito.forEach((curso) => {
    const { image, title, price, counter, id } = curso;
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <img src="${image}" alt="${title}" width="120">
      </td>
      <td>${title}</td>
      <td>${price}</td>
      <td>${counter}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
      </td>
    `;

    $carrito.appendChild(row);
  });
}

function limpiarHTML() {
  while ($carrito.firstChild) {
    $carrito.removeChild($carrito.firstChild);
  }
}

function borrarCurso(e) {
  e.preventDefault();

  const cursoId = e.target.getAttribute("data-id");

  articulosCarrito = articulosCarrito.filter((el) => el.id !== cursoId);

  carritoCursos();
}
