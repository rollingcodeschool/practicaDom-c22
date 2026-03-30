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
