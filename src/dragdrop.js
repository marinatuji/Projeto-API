const dropArea = document.getElementById("drop-area");

dropArea.addEventListener("drop" , (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
})

dropArea.addEventListener("dragover" , (ev) => {
    ev.preventDefault();
})

fetch("https://swapi.co/api/people/")
    .then(resp => resp.json())
        .then(resp => names(resp.results))

function names(data){
    const nameSec = document.getElementById("sw-names");
    nameSec.innerHTML = `${data.map((elem) => `<p draggable="true" id=${elem.name}>${elem.name}</p>`).join(" ")}`
    eventInit();
}

function eventInit(){
    const parag = document.querySelectorAll('p');
    parag.forEach((elem) => {
        elem.addEventListener("dragstart" , (ev) => {
            ev.dataTransfer.setData("text", ev.target.id);
        })
    })
    console.log(parag);
}



//