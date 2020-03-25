import { BaseDB } from "./baseDB";
import { Post, PostType } from "../business/entities/post";
import { PostGateway } from "../business/gateways/postGateway";
import moment from 'moment';


export class PostDB extends BaseDB implements PostGateway {
  private postTableName = "FUTUREBOOK_POSTS";
  
  private mapPostTypeToDB(type: PostType): string {
    switch (type) {
      case PostType.NORMAL:
        return "normal";
      case PostType.EVENT:
        return "event";
      default:
        return "normal";
    }
  }

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

  private mapDateToDBDate(input: Date): string {
    return input.toISOString().slice(0, 19).replace('T', ' ');
  }

  private mapDBDateToDate(input: string): Date {
    return new Date(input);
  }

  public async createPost(post: Post): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.postTableName} (
        id, 
        picture, 
        description, 
        creationDate, 
        type,
        userId
      ) 
      VALUES(
        '${post.getId()}',
        '${post.getPicture()}',
        '${post.getDescription()}',
        '${this.mapDateToDBDate(post.getCreationDate())}',
        '${this.mapPostTypeToDB(post.getType())}',
        '${post.getUserId()}'
      );`
    )
  }
}