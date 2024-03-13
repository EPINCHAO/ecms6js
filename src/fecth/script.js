const fecthData = () => {
  let variable = document.getElementById("prueba").value;
  fetch(`https://restcountries.com/v2/name/${variable}`)
    .then((respos) => respos.json())
    .then((data) => console.log(data));
};

fecthData();
