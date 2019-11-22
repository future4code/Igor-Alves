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
    
    title.value = ""
    writer.value = ""
    coment.value = ""
    
    publicarPost()
}

const publicados = document.getElementById("post-publicados")

function publicarPost() {
    publicados.innerHTML = ""
    for(post of postDaPágina){
        publicados.innerHTML += "<p> Titulo: " + post.titulo + "</p>"
        publicados.innerHTML += "<p> Autor: " + post.autor + "</p>"
        publicados.innerHTML += "<p> Comentário: " + post.comentario + "</p>"
    }
}

function keyEnter(e) {
    if (e.key === "Enter"){
        criarPostagem()
    }
}
