function edadMay() {
  let names = document.getElementById("name").value;
  let last = document.getElementById("last").value;
  let edadMayor = document.getElementById("year").value;

  const promiseEdad = new Promise((resolve, reject) => {
    if (edadMayor < 18) {
      reject(Error("Menor de edad" + edadMayor));
    } else {
      resolve(
        `Guardado: ${names} ${last} mayor de edad con la edad de ${edadMayor} `
      );
    }
  });

  promiseEdad
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
