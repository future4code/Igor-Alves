class Despesa{
    constructor(valor, tipo, descricao){
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

let totalDespesas = []

function salvarDespesa() {
    const valor =document.getElementById("valor-cadastro")
    const tipo = document.getElementById("tipo-cadastro")
    const descricao = document.getElementById("descricao-cadastro")
    
    if (valor.value === "" || tipo.value === "" || descricao.value === "") {
        alert("Todos os campos devem ser preenchidos e o valor da despesa deve ser do tipo númerico.")
    } else {
        const novaDespesa = new Despesa(parseInt(valor.value), tipo.value, descricao.value) 

        totalDespesas.push(novaDespesa)

        valor.value = ""
        tipo.value = ""
        descricao.value = ""
        console.log(totalDespesas)
    }
}

let despesaFiltrada = []

function filtrarDespesa() {
    const type = document.getElementById("tipo-detalhes")
    const valorMin = document.getElementById("valor-minimo")
    const valorMax = document.getElementById("valor-maximo")

    if (type.value === "" || valorMin.value === "" || valorMax.value === "") {
        alert("Todos os campos devem ser preenchidos e o valor da despesa deve ser do tipo númerico.")
    } else {
        despesaFiltrada = totalDespesas.filter((totalDespesas) => {
            return totalDespesas.tipo === type.value && totalDespesas.valor >= valorMin.value && totalDespesas.valor <= valorMax.value
        })
    }

    console.log(despesaFiltrada)
    mostrarDespesas(despesaFiltrada)
}

let descritivo = document.getElementById("lista-despesas")

function mostrarDespesas(despesaFiltrada) {
    for (item of despesaFiltrada){
        descritivo.innerHTML += "<p> Descrição: " + item.descricao + "</p>"
        descritivo.innerHTML += "<p> Tipo: " + item.tipo + "</p>"
        descritivo.innerHTML += "<p> Valor: R$"+ item.valor + "</p>"
    }
}


function valorTotal (){
    let total = 0
    for (num of )
}