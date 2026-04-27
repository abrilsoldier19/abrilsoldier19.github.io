function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = data;
    })
    .catch(err => console.error("Error cargando:", file, err));
}

// 🔥 rutas absolutas (CLAVE)
loadHTML("header", "/vistas/layout/header.html");
loadHTML("footer", "/vistas/layout/footer.html");