import { Video } from "../entities/video";

export interface VideoGateway {
  uploadVideo(video: Video): Promise<void>
}