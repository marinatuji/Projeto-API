fetch("https://swapi.co/api/people/")
    .then(resp => resp.json())
        .then(resp => names(resp.results))

function names(data){
    const nameSec = document.getElementById("sw-names");
    nameSec.innerHTML = `${data.map((elem) => `<p id=${elem.name}>${elem.name}</p>`)}`


}