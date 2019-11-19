let input = document.getElementById("novaTarefa");

function criarTarefa (){
    let dia = diaDaSemana.value
    let tarefa = input.value
    let div = document.getElementById("")

    switch (dia) {
        case "segunda":
            div = document.getElementById("segunda")
            div.innerHTML += "<li>"+ tarefa +"</li>"
            break;
        case "terca":
            div = document.getElementById("terca")
            div.innerHTML += "<li>"+ tarefa +"</li>"
            break;
        case "quarta":
            div = document.getElementById("quarta")
            div.innerHTML += "<li>"+ tarefa +"</li>"
            break;
        case "quinta":
            div = document.getElementById("quinta")
            div.innerHTML += "<li>"+ tarefa +"</li>"
            break;
        case "sexta":
            div = document.getElementById("sexta")
            div.innerHTML += "<li>"+ tarefa +"</li>"
            break;
        case "sabado":
            div = document.getElementById("sabado")
            div.innerHTML += "<li>"+ tarefa +"</li>"
            break;
        case "domingo":
            div = document.getElementById("domingo")
            div.innerHTML += "<li>"+ tarefa +"</li>"
            break;
    }
    document.getElementById('novaTarefa').value=""
} 