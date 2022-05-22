const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen("8080", ()=>{
    console.log("testando a porta 8080")
})

function doNothing() {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {


        if (!e) var e = window.event;

        e.cancelBubble = true;
        e.returnValue = false;

        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
}

async function loadRepositories(name) {
    var script = 'https://pokeapi.co/api/v2/pokemon/pikachu'+name;

    const response = await fetch(script);

    const repositories = await response.json();

    return repositories;

}

async function createList(name) {

    let repositoriesList = await loadRepositories(name);

    repositoriesList.map(repository => {

        let item = document.createElement('li');

        list.appendChild(item);

        item.insertAdjacentHTML('afterbegin', `<strong>Nome: ${repository.forms.0.name}</strong>`);
        item.insertAdjacentHTML('beforeend', `PESO: ${repository.game_indices.height}`);
        item.insertAdjacentHTML('beforeend', `HP: ${repository.stats.0.base_stat}`);
        item.insertAdjacentHTML('beforeend', `ATAQUE: ${repository.stats.1.base_stat}`);
        item.insertAdjacentHTML('beforeend', `DEFESA: ${repository.stats.2.base_stat}`);
        item.insertAdjacentHTML('beforeend', `ATAQUE ESPECIAL: ${repository.stats.3.base_stat}`);
        item.insertAdjacentHTML('beforeend', `DEFESA ESPECIAL: ${repository.stats.4.base_stat}`);
        item.insertAdjacentHTML('beforeend', `VELOCIDADE: ${repository.stats.5.base_stat}`);
        item.insertAdjacentHTML('beforeend', `<img src="${repository.sprites.other.home.front_default}">`);
    })
}
