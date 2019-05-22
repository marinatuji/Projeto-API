const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const checkLocation = document.querySelector("#search-check-location");
const selectState = document.querySelector('#search-select-state');

checkLocation.addEventListener('change', function (eve) {
  if(this.checked){
  eve.preventDefault();
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const select = document.querySelector('#search-select-state');
      select.length = 0;
      data
        .sort((a, b) => {
          if (a.sigla < b.sigla) {
            return -1;
          } if (a.sigla > b.sigla) {
            return 1;
          }
          return 0;
        })
        .map((state) => {
          select.options.add(new Option(state.sigla, state.id));
        });
    })
    .catch((resp) => {
      console.error(resp);
    });
  }
});

selectState.addEventListener('change', function (eve) {
  eve.preventDefault();
  const statesID = selectState.options[selectState.selectedIndex].value;
  const endpoint = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${statesID}/municipios`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const select = document.querySelector('#search-select-municipality');
      select.length = 0;
      data.map((munic) => {
        select.options.add(new Option(munic.nome, munic.id))
      });
    })
    .catch((resp) => {
      console.error(resp);
    });
});