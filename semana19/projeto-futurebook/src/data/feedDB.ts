import { FeedGateway } from "../business/gateways/feedGateway";
import { BaseDB } from "./baseDB";
import { Feed } from "../business/entities/feed";
import { PostType, Post } from "../business/entities/post";


export class FeedDB extends BaseDB implements FeedGateway {
  private feedTableName = "FUTUREBOOK_FEED";

  private mapDBTypeToPostType(type: string): PostType {
    switch (type) {
      case "normal":
        return PostType.NORMAL;
      case "event":
        return PostType.EVENT;
      default:
        return PostType.NORMAL;
    }
  }

  private mapDBDateToDate(input: string): Date {
    return new Date(input);
  }

  public async getFeed(
    userId: string, 
    limit: number,
    offset: number
  ): Promise<Feed[]> {
    const response = await this.connection.raw(`
      SELECT * FROM ${this.feedTableName}
      WHERE userFeed = '${userId}'
      ORDER BY creationDate DESC
      LIMIT ${limit} OFFSET ${offset};
    `)

    return response[0].map((feed: any) => {
      return new Feed(
        feed.userFeed, 
        feed.postId, 
        feed.picture, 
        feed.description, 
        this.mapDBDateToDate(feed.creationDate), 
        this.mapDBTypeToPostType(feed.type), 
        feed.userId,
        feed.userName,
        feed.userEmail
      )
    })
  }

  public async getFeedByType(
    userId: string, 
    limit: number,
    offset: number,
    type: string
  ): Promise<Feed[]> {
    const response = await this.connection.raw(`
      SELECT * FROM ${this.feedTableName}
      WHERE userFeed = '${userId}' AND type = '${type}'
      ORDER BY creationDate DESC
      LIMIT ${limit} OFFSET ${offset};
    `)

    return response[0].map((feed: any) => {
      return new Feed(
        feed.userFeed, 
        feed.postId, 
        feed.picture, 
        feed.description, 
        this.mapDBDateToDate(feed.creationDate), 
        this.mapDBTypeToPostType(feed.type), 
        feed.userId,
        feed.userName,
        feed.userEmail
      )
    })
  }

  public async getPostByIdFromFeed(postId: string, userId: string): Promise<Post | undefined> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.feedTableName}
      WHERE userFeed = '${userId}' AND postId = '${postId}';
    `)

    return result[0][0]
  }
}