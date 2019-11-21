class postagem {
    constructor(titulo, autor, comentario){
        this.titulo = titulo
        this.autor = autor
        this.comentario = comentario
    }
}

const postDaPágina = []

function criarPostagem() {
    let title = document.getElementById("titulo")
    let writer = document.getElementById("autor")
    let coment = document.getElementById("comentario")
    let post = new postagem(title.value, writer.value, coment.value)
    
    postDaPágina.push(post)
    console.log(postDaPágina)

    title.value = ""
    writer.value = ""
    coment.value = ""
}

function publicarPost() {
    
}