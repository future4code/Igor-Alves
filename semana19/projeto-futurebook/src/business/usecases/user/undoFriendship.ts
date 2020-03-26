import { FriendGateway } from "../../gateways/friendGateway"
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { ConflictError } from "../../errors/ConflictError";


export class UndoFriendshipUC {
  constructor(private db: FriendGateway, private jwtAuth: JWTAutenticationGateway) {}
  
  public async execute(input: UndoFriendshipUCInput): Promise<UndoFriendshipUCOutput | undefined>{
    try {
      if(!input.token) {
        throw new UnauthorizedError("Unauthorized")
      }
      
      const userId = this.jwtAuth.verifyToken(input.token as string) 
      
      const areFriends = await this.db.verifyFriendship(userId, input.friendId)
      
      if(!areFriends) {
        throw new ConflictError("To undo a friendship you must be a friend of the user")
      }
      
      await this.db.undoFriendship(userId, input.friendId)
      
      await this.db.undoFriendship(input.friendId, userId)
      
      return {
        message: "Ended friendship"
      }
    } catch(err) {
      if(err.errorCode) {
        throw err
      }
      throw new Error('An error occurred while trying to undo the friendship')
    }
  }
}

export interface UndoFriendshipUCInput {
  token: string,
  friendId: string
}

export interface UndoFriendshipUCOutput {
  message: string
}