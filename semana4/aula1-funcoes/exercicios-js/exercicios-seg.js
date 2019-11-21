// 1.	

// O código pede para ser impresso no console a variável meuDinheiro,  que por sua vez chama a função conversorDeMoeda e passa o valor de 100, a função pede ao usuário através do prompt para digitar o valor da cotação do dólar e depois retorna o valor em reais da quantia de dólar que foi digitado ao chamar a função, no caso 100 * cotação. Simplificando, será impresso no console o valor em real de 100 dólares e com a cotação que for digitada pelo usuário.


// 2.	Através de laços, que pode ser feito com for, for.. of e while.

const numeros = [1,2,3,4,5]
let i = 0

while (i < numeros.length) {
    console.log(numeros[i]);
    i++;
}

for (i=0; i < numeros.length; i++) {
    console.log(numeros[i])
}

for (let num of numeros){
    console.log(num)
}


// 3.

// a.	False
// b.	False
// c.	True
// d.	True
// e.	True


// 4.	

// let future = function() {
//     return alert("Hello Future4")
// }

// future()



// 5.	

let array = [10, 7, 50, 100, 1, 5, 22, 70, 90] 

function segundoPenultimo (a) {
    a.sort( (a,b) => a - b );
    console.log("O segundo menor valor é: " + a[1])
    console.log("O segundo maior valor é: " + a[a.length-2])
}

segundoPenultimo(array)
