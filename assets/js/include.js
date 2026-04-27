function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// detectar nivel de carpeta
let basePath = "";

if (window.location.pathname.includes("/vistas/ejercicios")) {
  basePath = "../../";
} else if (window.location.pathname.includes("/vistas")) {
  basePath = "../";
}

// cargar archivos
loadHTML("header", basePath + "layout/header.html");
loadHTML("footer", basePath + "layout/footer.html");