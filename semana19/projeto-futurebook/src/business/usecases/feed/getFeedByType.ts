import { FeedGateway } from "../../gateways/feedGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { PostType } from "../../entities/post";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { BadRequestError } from "../../errors/BadRequestError";


export class GetFeedByTypeUC {
  constructor(private db: FeedGateway, private jwtAuth: JWTAutenticationGateway) {}
  private POSTS_PER_PAGE = 10;

  public async execute(input: GetFeedUCInput): Promise<GetFeedUCOutput[] | undefined> {
    try {
      if(!input.token) {
        throw new UnauthorizedError("Unauthorized")
      }
      
      const userId = this.jwtAuth.verifyToken(input.token)

      if(!userId) {
        throw new UnauthorizedError("Unauthorized")
      }

      if(!input.page) {
        throw new BadRequestError("Page is not defined")
      }
      
      let page = input.page >= 1 ? input.page : 1;

      const offset = this.POSTS_PER_PAGE * (page - 1);
      
      if(!input.type) {
        throw new BadRequestError("Type is not defined")
      }

      const results = await this.db.getFeedByType(userId, this.POSTS_PER_PAGE, offset, input.type)

      return results.map((feedItem: any) => {
        return {
          id: feedItem.getId(),
          picture: feedItem.getPicture(),
          description: feedItem.getDescription(),
          creationDate: feedItem.getCreationDate(),
          type: feedItem.getType(),
          userId: feedItem.getUserId(),
          userEmail: feedItem.getUserEmail(),
          userName: feedItem.getUserName()
        }
      });
    } catch (err) {
      if(err.errorCode) {
        throw err
      }
      throw new Error("An error occurred while trying to get a feed with post of this type")
    }
  }
}

export interface GetFeedUCInput {
  token: string
  type: string
  page: number
}

export interface GetFeedUCOutput {
  id: string
  picture: string
  description: string
  creationDate: Date
  type: PostType
  userId: string
  userEmail: string
  userName: string
}