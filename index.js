const modal = document.getElementById("ventanaModal");
const boton = document.getElementById("abrirModal");
const span = document.getElementsByClassName("cerrar")[0];
function burguer() {
  boton.addEventListener("click", function () {
    modal.style.display = "block";
  });
  // Si el usuario hace clic en la x, la ventana se cierra
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // Si el usuario hace clic fuera de la ventana, se cierra.
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

burguer();
