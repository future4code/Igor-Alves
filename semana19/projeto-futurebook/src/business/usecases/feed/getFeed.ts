import { FeedGateway } from "../../gateways/feedGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { Feed } from "../../entities/feed";
import { PostType } from "../../entities/post";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { BadRequestError } from "../../errors/BadRequestError";


export class GetFeedUC {
  constructor(private db: FeedGateway, private jwtAuth: JWTAutenticationGateway) {}
  
  private POSTS_PER_PAGE = 10;

  public async execute(input: GetFeedUCInput): Promise<GetFeedUCOutput[]> {
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

      const results = await this.db.getFeed(userId, this.POSTS_PER_PAGE, offset)

      return results.map((feedItem: Feed) => {
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
      console.log(err)
      if(err.errorCode) {
        throw err
      }
      throw new Error("An error occurred while trying to get a feed")
    }
  }
}

export interface GetFeedUCInput {
  token: string,
  page: number;
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