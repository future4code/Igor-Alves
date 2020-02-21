import { PostReader } from "./PostReader";
import { JSONManager } from "./JSONManager";
import { Post } from "./Post";


export class PostReaderImp implements PostReader {
    read(){
        const fileManager = new JSONManager('./database.json')
        const allPosts = fileManager.ReadFile()
        allPosts.posts.forEach((post: Post) => {
            console.log(`${post.name} --- ${post.text} --- ${post.date}`)
        })
    }
}