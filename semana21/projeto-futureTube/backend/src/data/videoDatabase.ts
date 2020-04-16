import { BaseDatabase } from "./baseDatabase";
import { Video } from "../business/entities/video";
import { VideoGateway } from "../business/gateways/videoGateway";


export class VideoDatabase extends BaseDatabase implements VideoGateway {
  private videoTableName = "videos";

  private mapDBDataToVideo(input: any): Video {
    return new Video(
      input.id, 
      input.url, 
      input.thumbnail, 
      input.title, 
      input.description, 
      input.creationTime,
      input.userId
    )
  }

  public async uploadVideo(video: Video): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.videoTableName} (id, url, thumbnail, title, description, creationTime, userId) 
      VALUES(
        '${video.getId()}',
        '${video.getUrl()}',
        '${video.getThumbnail()}',
        '${video.getTitle()}',
        '${video.getDescription()}',
        '${video.getCreationTime()}',
        '${video.getUserId()}'
      );`
    )
  }
}