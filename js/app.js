function modificarTexto() {
  console.log("Desde la funcion modificar texto");
  //obtener el parrafo
  const parrafo = document.getElementById("parrafo-elegido");
  console.log(parrafo);
  //modificar el parrafo
  parrafo.textContent = "Esto es una prueba de texto";
  //parrafo.innerHTML = 'Esto es una <strong>prueba de texto</strong>'
  parrafo.classList.add("text-info", "fw-bold");
  //   parrafo.className += " text-info fw-bold";
}

const ocultarTexto = () => {
  console.log("Desde la funcion que oculta el texto");
  const parrafo = document.querySelector(".mt-3");
  //ocultar/mostrar el parrafo
  parrafo.classList.toggle("d-none");
  if (botones[3].textContent === "Ocultar") {
    // parrafo.classList.add('d-none')
    botones[3].textContent = "Ver mas";
    botones[3].classList.remove("btn-danger");
    botones[3].classList.add("btn-success");
  } else {
    // parrafo.classList.remove('d-none')
    botones[3].textContent = "Ocultar";
    botones[3].classList.remove("btn-success");
    botones[3].classList.add("btn-danger");
  }
};

const eliminarParrafo = () => {
  //buscar el parrafo a eliminar
  const parrafo = document.getElementById("parrafo-eliminar");
  //eliminar
  parrafo.remove();
  botones[4].classList.add("disabled");
};
const crearTarea = (e) => {
  e.preventDefault();
  // console.log(e)
  //acceder al texto del input
  const tarea = document.getElementById("tarea").value;
  const regExp = /^[a-zA-Z0-9 ]+$/;

  if (!regExp.test(tarea)) {
    alert("Ingresaste un valor erroneo");
    return;
  }

  const ul = document.querySelector(".list-group");

  //? Opcion 1
  //crear el li con sus valores
  // const li = document.createElement('li') //<li></li>
  // li.classList.add("list-group-item")
  // li.textContent = tarea
  // ul.appendChild(li)

  //? opcion 2
  ul.innerHTML += `<li class="list-group-item">${tarea}</li>`;

  //limpiar el formulario
  formTarea.reset();
};

const mostrarAlert = () => {
  console.log("mostrar alert");
  //setTimeout ejecuta una funcion pasado cierto tiempo en milisegundos
  setTimeout(() => {
    const alert = document.querySelector(".alert");
    alert.classList.remove("d-none");
  }, 3000);
};

// const mostrarAlert2 = () => {
//   const alert = document.querySelector(".alert");
//   alert.classList.remove("d-none");
// };

//Buscar el boton
// const botones = document.querySelectorAll('.btn')
const botones = document.getElementsByTagName("button");
const formTarea = document.getElementById("formTarea");
const btnMostrarAlert = document.getElementById("btnMostrarAlert");

//agregar el manejador de eventos
botones[3].addEventListener("click", ocultarTexto);
botones[4].addEventListener("click", eliminarParrafo);
formTarea.addEventListener("submit", crearTarea);
//? caso especial cuando agregamos una funcion con parametros
// botones[3].addEventListener('click', ()=> ocultarTexto('texto de prueba'))
btnMostrarAlert.addEventListener("click", mostrarAlert);
