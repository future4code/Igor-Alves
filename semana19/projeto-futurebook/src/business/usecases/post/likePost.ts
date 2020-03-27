import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { PostGateway } from "../../gateways/postGateway";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { BadRequestError } from "../../errors/BadRequestError";
import { FeedGateway } from "../../gateways/feedGateway";
import { ConflictError } from "../../errors/ConflictError";


export class LikePostUC {
  constructor(
    private postDb: PostGateway, 
    private feedDB: FeedGateway,
    private jwtAuth: JWTAutenticationGateway, 
  ) {}

  public async execute(input:LikePostUCInput): Promise<LikePostUCOutput | undefined> {
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

      if(alreadyLike) {
        throw new ConflictError("You have liked this post already")
      }

      await this.postDb.likePost(input.postId, userId)

      return {
        message:"Post liked successfully",
      }
    }catch(err){
      if(err.errorCode) {
        throw err
      }
      throw new Error("An error occurred while trying to like a post")
    }
  }
}

export interface LikePostUCInput {
  token: string
  postId: string
}

export interface LikePostUCOutput {
  message: string
}