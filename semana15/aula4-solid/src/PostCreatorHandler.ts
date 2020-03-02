import { LowerCasePostCreator } from "./LowerCasePostCreator"
import { UpperCasePostCreator } from "./UpperCasePostCreator"
import { NormalPostCreator } from "./NormalPostCreator"


export class PostCreatorHandler  {
    public execute(authorName: string, postText: string): void {
        if(postText.indexOf('&') === 0){
            const postCreator = new UpperCasePostCreator()
            postCreator.create(authorName, postText)
        } else if(postText.indexOf('%') === 0){
            const postCreator = new LowerCasePostCreator()
            postCreator.create(authorName, postText)
        } else {
            const postCreator = new NormalPostCreator()
            postCreator.create(authorName, postText)
        }
    }
}