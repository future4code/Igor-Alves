class Despesa{
    constructor(valor, tipo, descricao){
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

const totalDespesas = []

function salvarDespesa() {
    const valor = document.getElementById("valor-cadastro")
    const tipo = document.getElementById("tipo-cadastro")
    const descricao = document.getElementById("descricao-cadastro")
    const novaDespesa = new Despesa(valor.value, tipo.value, descricao.value) 

    totalDespesas.push(novaDespesa)

    valor.value = ""
    tipo.value = ""
    descricao.value = ""
    console.log(totalDespesas)
}


