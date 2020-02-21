import { Post } from "./Post";
import { PostCreator } from "./PostCreator";
import { JSONManager } from "./JSONManager";
import { ErrorLogger } from "./ErrorLogger";
import { ErrorTracker } from "./ErrorTracker";


export class LowerCasePostCreator implements PostCreator {
    private errorTracker: ErrorTracker

    constructor(){
        this.errorTracker = new ErrorLogger()
    }

    public validateInput(authorName: string, postText: string) {
        if(!authorName || !postText){
            this.errorTracker.onError("Seu nome ou post não pode estar em branco", new Date())
        }
    }

    public create(authorName: string, postText: string): void {
        this.validateInput(authorName, postText)
        const lowerCaseText: string = postText.slice(1).toLowerCase()
        const post = new Post(authorName, lowerCaseText, new Date)
        this.savePost(post)
    }

    public savePost(post: Post) {
        const fileManager = new JSONManager('./database.json')
        const database = fileManager.ReadFile()
        database.posts.push(post)
        fileManager.writeFile(database)
    }
}