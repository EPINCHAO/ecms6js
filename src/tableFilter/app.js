import { usuarios } from "./user.js";

const itemsPerPage = 5; // Number of items to display per page
//variables
const users = document.querySelector("#users");
const alerta = document.querySelector("#alerta");
const paginationContainer = document.getElementById("pagination-container");
const searchInput = document.getElementById("entrada");

//eventos
// (() => {
//   document.addEventListener("DOMContentLoaded", filtrarDatos);
//   entrada.addEventListener("input", filtrarDatos);
// })();

function filterDataByName(query) {
  return usuarios.filter((item) =>
    item.nombre.toLowerCase().includes(query.toLowerCase())
  );
}

//funciones
function mostrarDatos(currentPage, filterQuery = "") {
  users.innerHTML = "";
  let filteredData = usuarios;
  if (filterQuery.trim() !== "") {
    filteredData = filterDataByName(filterQuery);
  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);
  currentData.forEach((item) => {
    const { id, nombre, correo } = item;
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${correo}</td>
            <td><button id="delete-row">delete</button></td>
        `;
    users.appendChild(row);
  });

  if (!users.firstChild) {
    const mensaje = document.createElement("h4");
    mensaje.textContent = "NO HAY USUARIOS CON ESOS FILTROS";
    mensaje.classList.add(
      "text-center",
      "text-danger",
      "m-0",
      "border",
      "border-danger"
    );
    if (!alerta.firstChild) {
      alerta.appendChild(mensaje);
    }
  } else {
    alerta.innerHTML = "";
  }
}

// function filtrarDatos(e) {
//   users.innerHTML = "";
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = usuarios.slice(startIndex, endIndex);

//   let entradaInput = e.target.value?.toLowerCase() || "";
//   const usersFiltrados = usuarios.filter((item) => {
//     return item.nombre.toLowerCase().includes(entradaInput);
//   });
//   usersFiltrados.forEach((item) => {
//     const { id, nombre, correo } = item;
//     const row = document.createElement("tr");
//     row.innerHTML = `
//             <td>${id}</td>
//             <td>${nombre}</td>
//             <td>${correo}</td>
//             <td><button id="delete-row">delete</button></td>
//         `;
//     users.appendChild(row);
//   });

//   if (!users.firstChild) {
//     const mensaje = document.createElement("h4");
//     mensaje.textContent = "NO HAY USUARIOS CON ESOS FILTROS";
//     mensaje.classList.add(
//       "text-center",
//       "text-danger",
//       "m-0",
//       "border",
//       "border-danger"
//     );
//     if (!alerta.firstChild) {
//       alerta.appendChild(mensaje);
//     }
//   } else {
//     alerta.innerHTML = "";
//   }
// }

function limpiarDatos() {
  while (users.firstChild) {
    users.removeChild(users.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the table element
  var table = document.getElementById("myTable");

  // Attach click event listener to the table
  table.addEventListener("click", function (e) {
    // Check if the clicked element is a button with class 'deleteBtn'
    if (e.target.classList.contains("deleteBtn")) {
      // Get the parent row of the button
      var row = e.target.closest("tr");
      console.log(row);
      console.log(row.textContent);
      // Confirm deletion (you can customize this part)
      var confirmDelete = confirm("Are you sure you want to delete this row?");

      if (confirmDelete) {
        // Remove the row from the table
        row.parentNode.removeChild(row);
      }
    }
  });
});

function createPaginationLinks() {
  paginationContainer.innerHTML = "";
  const pageCount = Math.ceil(usuarios.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;

    link.addEventListener("click", function (event) {
      event.preventDefault();
      const filterQuery = searchInput.value;
      mostrarDatos(i, filterQuery);
    });

    paginationContainer.appendChild(link);
  }
}

// Add an event listener to the search input
searchInput.addEventListener("input", () => {
  const filterQuery = searchInput.value;
  mostrarDatos(1, filterQuery);
  // When the search query changes, reset to the first page
  createPaginationLinks();
});

// Initial display
mostrarDatos(1);
createPaginationLinks();
