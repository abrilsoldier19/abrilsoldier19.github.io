function mostrarSimuladorInteractivo() {
  document.getElementById("simulador-interactivo").style.display = "block";
}

function mostrarSimuladorGUI() {
  document.getElementById("simulador-GUI").style.display = "block";
}


function toggleSimulador(id) {
  const simInteractivo = document.getElementById("simulador-interactivo");
  const simGUI = document.getElementById("simulador-GUI");

  const actual = document.getElementById(id);

  // Ocultar ambos primero
  if (actual.style.display === "block") {
    actual.style.display = "none";
  } else {
    simInteractivo.style.display = "none";
    simGUI.style.display = "none";
    actual.style.display = "block";
  }
}
