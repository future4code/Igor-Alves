import { FeedGateway } from "../../gateways/feedGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";


export class GetFeedUC {
  constructor(private db: FeedGateway, private jwtAuth: JWTAutenticationGateway) {}
  
  private POSTS_PER_PAGE = 10;

  public async execute(input: GetFeedUCInput): Promise<GetFeedUCOutput[] | undefined> {
    try {
      const userId = this.jwtAuth.verifyToken(input.token)

      if(!userId) {
        throw new Error("Acesso não autorizado")
      }
      
      let page = input.page >= 1 ? input.page : 1;

      const offset = this.POSTS_PER_PAGE * (page - 1);

      const results = await this.db.getFeed(userId, this.POSTS_PER_PAGE, offset)

      return results.map((feedItem: any) => {
        return {
          id: feedItem.getId(),
          picture: feedItem.getPicture(),
          description: feedItem.getDescription(),
          creationDate: feedItem.getCreationDate(),
          userId: feedItem.getUserId(),
          userEmail: feedItem.getUserEmail(),
          userName: feedItem.getUserName()
        }
      });
    } catch (err) {
      console.log(err)
      throw new Error("Erro ao pegar posts de amigos")
    }
  }
}

export interface GetFeedUCInput {
  token: string,
  page: number;
}

export interface GetFeedUCOutput {
  id: string,
  picture: string,
  description: string,
  creationDate: Date,
  userId: string,
  userEmail: string,
  userName: string
}

export enum FeedOrderType {
  ASC = "ASC",
  DESC = "DESC"
}