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
        tipo.value = "Casa"
        descricao.value = ""
        
        mostrarDespesas()
        calcularTotal()
    }
}

let descritivo = document.getElementById("lista-despesas")

function mostrarDespesas() {
    descritivo.innerHTML = ""
    totalDespesas.forEach((despesa) => {
        descritivo.innerHTML += "<p> Descrição: " + despesa.descricao + "</p>" + "<p> Tipo: " + despesa.tipo + "</p>" + "<p> Valor: R$"+ despesa.valor + "</p>"
    })
}

let despesaFiltrada = []

function filtrarDespesa() {
    const type = document.getElementById("tipo-detalhes")
    const valorMin = document.getElementById("valor-minimo")
    const valorMax = document.getElementById("valor-maximo")

    if (type.value === "" || valorMin.value === "" || valorMax.value === "") {
        alert("Todos os campos devem ser preenchidos.")
    } else {
        despesaFiltrada = totalDespesas.filter((totalDespesas) => {
            return totalDespesas.tipo === type.value && totalDespesas.valor >= valorMin.value && totalDespesas.valor <= valorMax.value
        })

        type.value = "Casa"
        valorMin.value = ""
        valorMax.value = ""

        mostrarDespesasFiltradas()
    }
}


function mostrarDespesasFiltradas() {
    descritivo.innerHTML = ""
    despesaFiltrada.forEach((despesa) => {
        descritivo.innerHTML += "<p> Descrição: " + despesa.descricao + "</p>" + "<p> Tipo: " + despesa.tipo + "</p>" + "<p> Valor: R$"+ despesa.valor + "</p>"
    })
}


function calcularTotal() {
    let valorTotal = 0
    const total = document.getElementById("total")
    totalDespesas.forEach((num) => {
        valorTotal += num.valor
    })
    total.innerHTML = "<h3>" + "Valor Total: R$" + valorTotal + "<h3>"
    mostrarExtrato()
}


function mostrarExtrato() {
    const extrato = document.getElementById("extrato")
    
    let valorCasa = 0
    const casa = totalDespesas.filter((totalDespesas) => {
        return totalDespesas.tipo === "Casa"
    })

    casa.forEach((num) => {
        valorCasa += num.valor
    })

    let valorViagem = 0
    const viagem = totalDespesas.filter((totalDespesas) => {
        return totalDespesas.tipo === "Viagem"
    })
    
    viagem.forEach((num) => {
        valorViagem += num.valor
    })

    let valorRoles = 0
    const role = totalDespesas.filter((totalDespesas) => {
        return totalDespesas.tipo === "Rolês"
    })
    
    role.forEach((num) => {
        valorRoles += num.valor
    })

    let valorOutros = 0
    const outros = totalDespesas.filter((totalDespesas) => {
        return totalDespesas.tipo === "Outros"
    })
    
    outros.forEach((num) => {
        valorOutros += num.valor
    })

    extrato.innerHTML = ""

    extrato.innerHTML += "<p> Casa: R$" + valorCasa + "</p>";
    extrato.innerHTML += "<p> Viagem: R$" + valorViagem + "</p>";
    extrato.innerHTML += "<p> Rolês: R$" + valorRoles + "</p>";
    extrato.innerHTML += "<p> Outros: R$" + valorOutros + "</p>";
}