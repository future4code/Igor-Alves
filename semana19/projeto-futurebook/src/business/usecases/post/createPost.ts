import { v4 } from "uuid";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { PostGateway } from "../../gateways/postGateway";
import { Post } from "../../entities/post";
import { UnauthorizedError } from "../../errors/UnauthorizedError";


export class CreatePostUC {
  constructor(
    private db: PostGateway, 
    private jwtAuth: JWTAutenticationGateway, 
  ) {}

  public async execute(input:CreatePostUCInput): Promise<CreatePostUCOutput | undefined> {
    try{
      if(!input.token) {
        throw new UnauthorizedError("Unauthorized")
      }
      
      const id = v4();

      if(!input){
        return undefined
      }

      const userId = this.jwtAuth.verifyToken(input.token)

      if(!userId) {
        throw new UnauthorizedError("Unauthorized")
      }

      const newPost = new Post(
        id, 
        input.picture, 
        input.description, 
        new Date(), 
        Post.mapStringsToPostType(input.type), 
        userId
      );
     
      await this.db.createPost(newPost);

      return {
        message:"Post created successfully",
      }
    }catch(err){
      console.log(err)
      throw new Error("An error occurred while trying to create a post")
    }
  }
}

export interface CreatePostUCInput {
  token: string
  picture: string
  description: string
  type: string
}

export interface CreatePostUCOutput {
  message: string
}