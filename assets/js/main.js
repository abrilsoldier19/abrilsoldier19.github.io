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

  (function () {
    $('[data-toggle="popover"]').popover({
      template: '<div class="popover custom-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      .on('shown.bs.popover', function () {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, $(this).next('.popover').find('.popover-body')[0]]);
      });
  });
    (function() {
        $('[data-toggle="popover"]').popover();
    });

// vista de datos.html para guardar datos en localStorage y mostrar en una tabla los registros de estudiantes
function myfunc(event)
        {
            event.preventDefault();

            var nombre = document.getElementById("nombre").value;
            var grupo = document.getElementById("grupo").value;
            var especialidad = document.getElementById("especialidad").value;
            var fecha = document.getElementById("fecha").value;

            var data = {
                nombre: nombre,
                grupo: grupo,
                especialidad: especialidad,
                fecha: fecha
            };
            var savedData = localStorage.getItem('userData');
            var parsedData = savedData ? JSON.parse(savedData) : [];
            parsedData.push(data);
            localStorage.setItem('userData', JSON.stringify(parsedData));

            addRowToTable(nombre, grupo, especialidad, fecha);

        }

  
        function addRowToTable(nombre, grupo, especialidad, fecha) 
        {
            var table = document.getElementById("dataTable");
            var newRow = table.insertRow();

            var cell1 = newRow.insertCell();
            cell1.textContent = nombre;

            var cell2 = newRow.insertCell();
            cell2.textContent = grupo;

            var cell3 = newRow.insertCell();
            cell3.textContent = especialidad;

            var cell4 = newRow.insertCell();
            cell4.textContent = fecha;

            var cell5 = newRow.insertCell();
            var editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.classList.add("btn-guardar-tabla-csv");
            editButton.addEventListener("click", function() 
            {
              editarFila(newRow);
            });
            cell5.appendChild(editButton);
        }
        function mostrarDatosEnTabla() {
            var savedData = localStorage.getItem('userData');
            if (savedData) {
                var parsedData = JSON.parse(savedData);
                parsedData.forEach(function (data) {
                    addRowToTable(data.nombre, data.grupo, data.especialidad, data.fecha);
                });
            }
        }

        function editarFila(row) 
        {
            var nombre = prompt("Ingrese el nuevo nombre");
            var grupo = prompt("Ingrese el nuevo grupo");
            var especialidad = prompt("Ingrese la nueva especialidad");
            var fecha = prompt("Ingrese la nueva fecha");

            if (nombre && grupo && especialidad && fecha) 
            {
              var cells = row.getElementsByTagName("td");
              cells[0].textContent = nombre;
              cells[1].textContent = grupo;
              cells[2].textContent = especialidad;
              cells[3].textContent = fecha;

              // Actualizar los datos en localStorage si es necesario
              var savedData = localStorage.getItem('userData');
              if (savedData) 
              {
                var parsedData = JSON.parse(savedData);
                var rowIndex = row.rowIndex - 1;
                parsedData[rowIndex].nombre = nombre;
                parsedData[rowIndex].grupo = grupo;
                parsedData[rowIndex].especialidad = especialidad;
                parsedData[rowIndex].fecha = fecha;
                localStorage.setItem('userData', JSON.stringify(parsedData));
              }
              } else {
                 alert("Debe ingresar todos los campos para editar la fila.");
              }
        }


        window.addEventListener('load', mostrarDatosEnTabla)

  
  function guardarDatos() {
      var nombre = document.getElementById("nombre").value;
      var grupo = document.getElementById("grupo").value;
      var especialidad = document.getElementById("especialidad").value;
      var fecha = document.getElementById("fecha").value;

      var datos = [nombre, grupo, especialidad, fecha];
      var csv = datos.join(",") + "\n";

      var link = document.createElement("a");
      link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
      link.download = "datos_usuario.csv";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }


/// Scroll interactivo para la vista principal de simulacion_mecanismos.html

function efectoScroll() {
  const header = document.querySelector(".section-header");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  // cuánto tarda en desaparecer (ajústalo)
  let maxScroll = 200;

  // calcula opacidad entre 1 y 0.3
  let opacity = 1 - (scroll / maxScroll);

  if (opacity < 0.3) opacity = 0.3;

  header.style.background = `rgba(0, 0, 0, ${opacity})`;
});

}
document.addEventListener("DOMContentLoaded", efectoScroll);
