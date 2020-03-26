import { Feed } from "../entities/feed";
import { PostType } from "../entities/post";

export interface FeedGateway {
    getFeed(userId: string, limit: number, offset: number): Promise<Feed[]>
    getFeedByType(userId: string, limit: number, offset: number, type: string): Promise<Feed[]>
}