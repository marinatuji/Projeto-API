const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const selectState = document.querySelector("#api-states");

selectState.addEventListener("click", function (eve) {
  eve.preventDefault();
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      //const UF = getData.id
      const getResult = document.querySelector(".results-list");//armazenei dom
      const createUL = document.createElement("article");;
      const createText = document.createTextNode(data);
      createUL.appendChild(createText);
      getResult.appendChild(createUL);
      // console.log(resp);
    })
    .catch((resp) => {
      console.error(resp);
    });
});
