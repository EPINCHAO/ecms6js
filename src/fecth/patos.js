const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://random-d.uk/api/v2/list";

const fecthData1 = () => {
  fetch(corsProxyUrl + apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "origin",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con código de estado ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};

fecthData1();

const xhr = new XMLHttpRequest();
const url = "https://random-d.uk/api/v2/list";

xhr.open("GET", url);
xhr.onreadystatechange = someHandler;
xhr.send();

const fecthData = () => {
  fetch("https://swapi.dev/api/people/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `La solicitud falló con código de estado ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};
