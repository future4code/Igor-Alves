import { Feed } from "../entities/feed";

export interface FeedGateway {
    getFeed(userId: string, limit: number, offset: number): Promise<Feed[]>
}