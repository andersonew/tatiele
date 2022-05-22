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

async function loadRepositories(nome) {
    var script = 'https://pokeapi.co/api/v2/pokemon/'+nome;

    const response = await fetch(script);

    const repositories = await response.json();

    return repositories;

}

async function createList(nome) {

    let repositoriesList = await loadRepositories(nome);

    repositoriesList.forms.map(repository => {

        let item = document.createElement('strong');

        list.appendChild(item);

        item.insertAdjacentHTML('afterbegin', `NOME: ${repository.name.toUpperCase()}`);
    })

    let i = 0;

    repositoriesList.stats.map(power => {

        let item = document.createElement('li');
        i++;

        list.appendChild(item);
        if (i == 1){
            item.insertAdjacentHTML('beforeend', `HP: ${power.base_stat}`);
        }
        if (i == 2){
            item.insertAdjacentHTML('beforeend', `ATAQUE: ${power.base_stat}`);
        }
        if (i == 3){
            item.insertAdjacentHTML('beforeend', `DEFESA: ${power.base_stat}`);
        }
        if (i == 4){
            item.insertAdjacentHTML('beforeend', `ATAQUE ESPECIAL: ${power.base_stat}`);
        }
        if (i == 5){
            item.insertAdjacentHTML('beforeend', `DEFESA ESPECIAL: ${power.base_stat}`);
        }
        if (i == 6){
            item.insertAdjacentHTML('beforeend', `VELOCIDADE: ${power.base_stat}`);
        }
        
    })

    let imagem = repositoriesList.sprites.other.home.front_default;
    
    let item = document.createElement('center');
    list.appendChild(item);
    item.insertAdjacentHTML('afterbegin', `<img src="${imagem}">`);

}
