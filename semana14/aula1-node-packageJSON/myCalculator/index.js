const operator = process.argv[2];
const firstNumber = Number(process.argv[3]);
const SecondNumber = Number(process.argv[4]);
const notUndefined = firstNumber && SecondNumber && operator !== undefined;
const typeNumber = firstNumber && SecondNumber !== NaN;
const yellow = '\033[1;33m';
const blue = '\033[0;34m';
const green = '\033[0;32m';
const cyan = '\033[0;36m';
const purple = '\033[1;35m';
const red = '\033[0;31m';




if (notUndefined && typeNumber) {
    switch(operator){
        case 'add':
            console.log(blue + (firstNumber + SecondNumber))
        break
        case 'sub':
            console.log(green + (firstNumber - SecondNumber))
        break
        case 'mult':
            console.log(cyan + (firstNumber * SecondNumber))
        break
        case 'div':
            console.log(purple + (firstNumber / SecondNumber))
        break
        default:
            console.log(`
            ${yellow}Passe um operador válido.
            -----------------------------------------------------
            Operadores aceitos: 
            add = soma os dois números
            sub = subtrai os dois números
            mult = multiplica os dois números
            div = divide os dois números
            `)
        break
    }
} else {
    console.log(`
    ${red}Passe parametros ao chamar a função [operador número número]
    -----------------------------------------------------
    Operadores aceitos: 
    add = soma os dois números
    sub = subtrai os dois números
    mult = multiplica os dois números
    div = divide os dois números
    ---------------------------------------------------
    Exemplo: add 2 2
    Resultado: 4
    `)
}


