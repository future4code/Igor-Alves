const lista = document.getElementById("lista-inscritos")


function novoInscrito() {
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
    let inscrito = {
        nome: nome,
        idade: idade,
        email: email,
    }

    lista.innerHTML += "<p class='nome'>" + "Nome: " + inscrito.nome + "</p>"
    lista.innerHTML += "<p class='idade'>" + "Idade: " + inscrito.idade + "</p>"
    lista.innerHTML += "<p class='email'>" + "Email: " + inscrito.email + "</p>"
    apagarInput()
}

function onKey (e) {
    if (e.target.value === "enter") {
        novoInscrito()
    }
    apagarInput()
}

function apagarInput() {
    let nome = document.getElementById("nome").value = ""
    let idade = document.getElementById("idade").value = ""
    let email = document.getElementById("email").value = ""
}