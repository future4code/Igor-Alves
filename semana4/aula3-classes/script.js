class postagem {
    constructor(titulo, autor, comentario){
        this.titulo = titulo
        this.autor = autor
        this.comentario = comentario
    }
}



function criarPostagem() {
    const title = document.getElementById("titulo").value
    const writer = document.getElementById("autor").value
    const coment = document.getElementById("comentario").value
    let post = new postagem(title, writer, coment)
}