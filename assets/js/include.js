function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = data;
      if (callback) callback();
    }).catch(err => console.error("Error cargando:", file, err));
}

// 🔥 rutas absolutas (CLAVE)
loadHTML("header", "/vistas/layout/header.html", efectoScroll);
loadHTML("footer", "/vistas/layout/footer.html");