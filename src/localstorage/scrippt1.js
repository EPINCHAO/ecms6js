let form = document.querySelector("#forms");

const loadFloats = () => {
  return JSON.parse(localStorage.getItem("floats"));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  let floats = loadFloats();

  floats.push(data);
  localStorage.setItem(floats, JSON.stringify(floats)) ?? [];
  console.log(data);
  fillTable();
});

const fillTable = () => {
  let floats = loadFloats();
  //traer el elemento
  let tableElement = document.querySelector("#tableFloats tbody");
  tableElement.innerHTML = "";

  //Filtrar
  floats.array.forEach((item) => {
    let row = tableElement.insertRow(-1);

    //Recorrer el objeto
    for (let itemkey in item) {
      //insertar una celda
      let cell = row.insertCell(-1);
      let p = document.createElement("p");
      p.innerText = item[itemkey];
      cell.appendChild(p);
    }
  });
};

fillTable();
