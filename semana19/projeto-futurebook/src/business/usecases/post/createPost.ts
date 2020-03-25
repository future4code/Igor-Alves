import { v4 } from "uuid";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { PostGateway } from "../../gateways/postGateway";
import { Post } from "../../entities/post";


export class CreatePostUC {
  constructor(
    private db: PostGateway, 
    private jwtAuth: JWTAutenticationGateway, 
  ) {}

  public async execute(input:CreatePostUCInput): Promise<CreatePostUCOutput | undefined> {
    try{
      const id = v4();

      if(!input){
        return undefined
      }

      const userId = this.jwtAuth.verifyToken(input.token)

      if(!userId) {
        throw new Error("Acesso não autorizado")
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
        message:"Post criado com sucesso",
      };
    }catch(err){
      console.log(err)
      throw new Error("Erro ao criar post")
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