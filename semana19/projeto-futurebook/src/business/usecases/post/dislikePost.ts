import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { PostGateway } from "../../gateways/postGateway";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { BadRequestError } from "../../errors/BadRequestError";
import { FeedGateway } from "../../gateways/feedGateway";
import { ConflictError } from "../../errors/ConflictError";


export class DislikePostUC {
  constructor(
    private postDb: PostGateway, 
    private feedDB: FeedGateway,
    private jwtAuth: JWTAutenticationGateway, 
  ) {}

  public async execute(input:dislikePostUCInput): Promise<dislikePostUCOutput | undefined> {
    try{
      if(!input.token) {
        throw new UnauthorizedError("Unauthorized")
      }

      const userId = this.jwtAuth.verifyToken(input.token)

      if(!userId) {
        throw new UnauthorizedError("Unauthorized")
      }

      const post = await this.feedDB.getPostByIdFromFeed(input.postId, userId)

      if(!post) {
        throw new BadRequestError("This post does not exist in your feed")
      }

      const alreadyLike = await this.postDb.verifyLike(input.postId, userId)

      if(!alreadyLike) {
        throw new ConflictError("You still don't like this post")
      }

      await this.postDb.dislikePost(input.postId, userId)

      return {
        message:"Post disliked successfully",
      }
    }catch(err){
      if(err.errorCode) {
        throw err
      }
      throw new Error("An error occurred while trying to dislike a post")
    }
  }
}

export interface dislikePostUCInput {
  token: string
  postId: string
}

export interface dislikePostUCOutput {
  message: string
}