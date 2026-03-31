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


// Función para realizar la operación en opcion h) Accionamiento por cremallera y por tornillo sin fin
function operacion() {
          var z = parseFloat(document.getElementById('z').value);
          var m = parseFloat(document.getElementById('m').value);
    
          var s = z * m * Math.PI;

          document.getElementById('resultado_s').innerHTML = "" + s;
        }


        function mostrarImagen() {
        var imageContainer = document.getElementById('imageContainer');
        var image = document.createElement('img');
        image.src = '/static/cremallera_opcion_h).png'; // Reemplaza con la ruta de tu imagen
        image.style.width = '350px'; // Set the desired width
        image.style.height = '250px';
        
        // Agregar estilo para el efecto de luz
        image.style.borderRadius = '10px';
        image.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Cambia el valor según tus preferencias

        imageContainer.innerHTML = ''; // Limpiar el contenedor de imágenes
        imageContainer.style.display = 'flex';
        imageContainer.style.justifyContent = 'center';
        imageContainer.style.alignItems = 'center';
        imageContainer.appendChild(image); // Agregar la imagen al contenedor
    }
  $(function () {
    $('[data-toggle="popover"]').popover({
      template: '<div class="popover custom-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      .on('shown.bs.popover', function () {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, $(this).next('.popover').find('.popover-body')[0]]);
      });
  });
    $(function() {
        $('[data-toggle="popover"]').popover();
    });