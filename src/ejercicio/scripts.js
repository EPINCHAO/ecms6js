const getFact = () => {
  let animal_type = document.getElementById("animal_type").value;
  let amount = document.getElementById("amount").value;

  fetch(
    `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_type}&amount=${amount}`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      for (i = 0; i < amount; i++) {
        let factData_one = data[i];
        let factText = factData_one.text;
        let animal_type = factData_one.type;
        let deleted = factData_one.deleted;

        const factElement = document.createElement("div");
        factElement.classList.add("border-b", "even:bg-gray-100");
        factElement.innerHTML = `
            <div class="mt-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 id="type_animal" class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${animal_type}</h5>
        
                <p id="text_fact" class="mb-3 font-normal text-gray-500 dark:text-gray-400">${factText}</p>
                <p id="delet" class="mb-3 font-normal text-gray-500 dark:text-gray-400"> fue eliminado: ${deleted} </p>
            </div>
            `;

        document.body.appendChild(factElement);
      }
    });
};
