import { Post } from "./Post";
import { PostCreator } from "./PostCreator";
import { JSONManager } from "./JSONManager";
import { ErrorPrinter } from "./ErrorPrinter";


export class NormalPostCreator implements PostCreator {
    constructor(private errorPrinter: ErrorPrinter){}

    public validateInput(authorName: string, postText: string) {
        if(!authorName || !postText){
            this.errorPrinter.onError("Seu nome ou post não pode estar em branco", new Date())
        }
    }

    public create(authorName: string, postText: string): void {
        this.validateInput(authorName, postText)
        const post = new Post(authorName, postText, new Date)
        this.savePost(post)
    }

    public savePost(post: Post) {
        const fileManager = new JSONManager('./database.json')
        const database = fileManager.ReadFile()
        database.posts.push(post)
        fileManager.writeFile(database)
    }
}