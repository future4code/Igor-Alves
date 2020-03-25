import { Feed } from "../entities/feed";

export interface FeedGateway {
    getFeed(userId: string): Promise<Feed[]>
}