import { FriendGateway } from "../business/gateways/friendGateway";
import { BaseDB } from "./baseDB";


export class FriendDB extends BaseDB implements FriendGateway {
  private friendsTableName = "FUTUREBOOK_FRIENDS";

  public async createFriendship(userId: string, friendId: string): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.friendsTableName} (user_id1, user_id2) 
      VALUES(
        '${userId}',
        '${friendId}'
      );`
    )
  }

  public async verifyFriendship(userId: string, friendId: string): Promise<boolean> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.friendsTableName}
      WHERE user_id1 = '${userId}' 
      AND user_id2 = '${friendId}';
    `)

    if(!result[0][0]){
      return false
    }

    return true
  }

  public async undoFriendship(userId: string, friendId: string): Promise<void> {
    await this.connection.raw(`
      DELETE 
      FROM ${this.friendsTableName}
      WHERE user_id1 = '${userId}'
      AND user_id2 = '${friendId}';
    `)
  }
}