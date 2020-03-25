import { FeedGateway } from "../business/gateways/feedGateway";
import { BaseDB } from "./baseDB";
import { Feed } from "../business/entities/feed";
import { PostType } from "../business/entities/post";


export class FeedDB extends BaseDB implements FeedGateway {
  private feedTableName = "FUTUREBOOK_FEED";

  public async getFeed(userId: FeedInput): Promise<Feed[]> {
    const response = await this.connection.raw(`
      SELECT * FROM ${this.feedTableName}
      WHERE type = '${this.mapPostTypeToDB(type)}'
      ORDER BY ${orderBy} ${orderType}
      LIMIT ${limit} OFFSET ${offset} 
    `)

    return response[0].map((feed: any) => {
      return new Feed(
        feed.userFeed, 
        feed.id, 
        feed.picture, 
        feed.description, 
        feed.creationDate, 
        feed.type, 
        feed.userId,
        feed.userName,
        feed.userEmail
      )
    })
  }
}

export interface FeedInput {
  type: PostType,
  orderBy: string,
  orderType: string,
  limit: number,
  offset: number
}