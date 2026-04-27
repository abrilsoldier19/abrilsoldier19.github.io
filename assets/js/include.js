function loadHTML(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar: ${file}`);
      }
      return response.text();
    })
    .then(data => {
      element.innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

function getBasePath() {
  const path = window.location.pathname;

  // index.html en raíz
  if (!path.includes("/vistas/")) {
    return "";
  }

  // cuenta cuántas carpetas hay después de /vistas/
  const afterVistas = path.split("/vistas/")[1];
  const folders = afterVistas.split("/").slice(0, -1);

  return "../".repeat(folders.length + 1);
}

const basePath = getBasePath();

loadHTML("header", basePath + "vistas/layout/header.html");
loadHTML("footer", basePath + "vistas/layout/footer.html");