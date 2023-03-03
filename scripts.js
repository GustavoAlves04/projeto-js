let chave = "0df589669b9fc7cd5dec48b41fdc75f8"

async function buscarCidade(cidade){
    let dado = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric"
    ).then( resposta => resposta.json)

    console.log(dados)
}


function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
}