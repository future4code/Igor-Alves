import { readFile, readdir, writeFile } from 'fs';
 
const path:string = "../textos"


const readAllFilesFolder = new Promise((resolve, reject) => {
    readdir(path, (err: Error, folder: string[]) => {
        folder.forEach( file => {   
            readFile(`${path}/${file}`, (err: Error, data:Buffer) => {
                if(err){
                    reject(err)
                    return
                }

                console.log(data.toString())
                resolve(data.toString())
            })
        })
    });
})


const init = async () => { 
    try{
        const allContent = await readAllFilesFolder;
        console.log(allContent)
    } catch(error){
        console.error("Promisse Falhou", error)
    }
}

init();