function modificarTexto() {
  console.log("Desde la funcion modificar texto");
  //obtener el parrafo
  const parrafo = document.getElementById("parrafo-elegido");
  console.log(parrafo);
  //modificar el parrafo
  parrafo.textContent = "Esto es una prueba de texto";
  //parrafo.innerHTML = 'Esto es una <strong>prueba de texto</strong>'
   parrafo.classList.add('text-info', 'fw-bold')
//   parrafo.className += " text-info fw-bold";
}

const ocultarTexto = () =>{
    console.log('Desde la funcion que oculta el texto')
    const parrafo = document.querySelector('.mt-3')
   //ocultar/mostrar el parrafo
    if(botones[3].textContent === 'Ocultar'){
        parrafo.classList.add('d-none')
        botones[3].textContent = 'Ver mas'
        botones[3].classList.remove('btn-danger')
        botones[3].classList.add('btn-success')
    }else{
        parrafo.classList.remove('d-none')
        botones[3].textContent = 'Ocultar'
        botones[3].classList.remove('btn-success')
        botones[3].classList.add('btn-danger')
    }

}

//Buscar el boton
// const botones = document.querySelectorAll('.btn')
const botones = document.getElementsByTagName('button')

//agregar el manejador de eventos
botones[3].addEventListener('click', ocultarTexto)

//? caso especial cuando agregamos una funcion con parametros
// botones[3].addEventListener('click', ()=> ocultarTexto('texto de prueba'))