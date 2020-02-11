const fs = require('fs');
const fileName = process.argv[2];
const newTask = `\n${process.argv[3]}`;
const notUndefined = process.argv[2] && process.argv[3] !== undefined;
const red = '\033[0;31m';
const green = '\033[0;32m';


if(notUndefined) {
    try{
        fs.appendFileSync(fileName, newTask, 'utf8');
        console.log(green + 'Tarefa adicionada com sucesso!')
    }catch(error){
        console.error(error)
    } 
} else {
    console.log(`
    ${red}Passe parametros ao chamar a função [Arquivo "Tarefa a ser adicionada"]
    -----------------------------------------------------
    Exemplo: tarefas.txt "Ler o clean code"
    `)
}