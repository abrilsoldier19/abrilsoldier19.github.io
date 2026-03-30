function mostrarSimuladorInteractivo() {
  document.getElementById("simulador-interactivo").style.display = "block";
}

function mostrarSimuladorGUI() {
  document.getElementById("simulador-GUI").style.display = "block";
}

function toggleSimulador(id) {
  let sim1 = document.getElementById("simulador-interactivo");
  let sim2 = document.getElementById("simulador-GUI");

  let actual = document.getElementById(id);

  // Ocultar ambos primero
  sim1.style.display = "none";
  sim2.style.display = "none";

  // Si el que clickeaste estaba oculto → mostrarlo
  if (actual.style.display === "none") {
    actual.style.display = "block";
  }
}