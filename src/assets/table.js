//import { data } from "./RandomData.js";

let dataFlats = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
];

document.addEventListener("DOMContentLoaded", function () {
  const addRowBtn = document.getElementById("addRowBtn");
  const dataTableBody = document.querySelector("#dataTable tbody");

  // Función para agregar una fila a la tabla
  function addRow(data) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = data.nombre;
    row.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = data.edad;
    row.appendChild(ageCell);

    const actionsCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", function () {
      row.remove();
    });
    actionsCell.appendChild(deleteBtn);

    row.appendChild(actionsCell);

    dataTableBody.appendChild(row);
  }

  // function Cell

  const nameCellFunction = (nameCell) => {
    document.createElement("td");
    ageCell.textContent = data.streerName;
    row.appendChild(nameCell);
  };
  // Agregar filas iniciales desde el JSON
  dataFlats.forEach(addRow);

  // Evento para agregar una fila cuando se hace clic en el botón
  addRowBtn.addEventListener("click", function () {
    const newData = { nombre: "Nuevo Nombre", edad: 0 };
    addRow(newData);
  });
});
