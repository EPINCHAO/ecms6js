let form = document.querySelector("#form");
let formFilter = document.querySelector("#filterForm");

// esto trae los datos para agregar el array
const loadFlats = () => {
  return JSON.parse(localStorage.getItem("flats")) ?? [];
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // todos los elementos del formulario que se transforma un objeto
  const data = Object.fromEntries(new FormData(e.target));
  let flats = loadFlats();
  flats.push(data);
  localStorage.setItem("flats", JSON.stringify(flats)); 
  fillTable(flats);
});

const fillTable = (flats) => {
  let tableElement = document.querySelector("#tableFlats tbody");
  tableElement.innerHTML = "";

  flats.forEach((item) => {
    let row = tableElement.insertRow(0);
    for (let itemKey in item) {
      let cell = row.insertCell(-1);
      let p = document.createElement("p");
      p.innerText = item[itemKey];
      cell.appendChild(p);
    }
  });
};

formFilter.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  let flats = loadFlats();

  //city
  if (data.city) {
    flats = flats.filter((item) => {
      if (data.city.toLowerCase() == item.city.toLowerCase()) {
        return item;
      }
    });
  }

  //area
  if (data.minarea == "") {
    data.minarea = 0;
  }
  if (data.maxarea == "") {
    data.maxarea = 0;
  }

  if (data.minarea || data.maxarea) {
    flats = flats.filter((item) => {
      if (
        parseInt(item.areaSize) <= parseInt(data.maxarea) &&
        parseInt(item.areaSize) >= parseInt(data.minarea)
      ) {
        return item;
      }
    });
  }

  //price
  if (data.price) {
    let options = data.price.split("-");

    flats = flats.filter((item) => {
      if (
        parseInt(item.rentPrice) <= parseInt(options[1]) &&
        parseInt(item.rentPrice) >= parseInt(options[0])
      ) {
        return item;
      }
    });
  }

  fillTable(flats);
});

function init() {
  let flats = loadFlats();
  fillTable(flats);
}

init();
