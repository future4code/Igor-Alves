import { FriendGateway } from "../../gateways/friendGateway"
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { ConflictError } from "../../errors/ConflictError";


export class MakeFriendshipUC {
  constructor(private db: FriendGateway, private jwtAuth: JWTAutenticationGateway) {}
  
  public async execute(input: MakeFriendshipUCInput): Promise<MakeFriendshipUCOutput | undefined> {
    try {
      if(!input.token) {
        throw new UnauthorizedError("Unauthorized")
      }

      const userId = this.jwtAuth.verifyToken(input.token as string) 

      if(await this.db.verifyFriendship(userId, input.friendId)) {
        throw new ConflictError("You are friends already")
      }

      await this.db.createFriendship(userId, input.friendId)

      await this.db.createFriendship(input.friendId, userId)

      return {
        message: "You are friends now"
      }
    } catch(err) {
      if(err.errorCode) {
        throw err
      }
      throw new Error('An error occurred while making friendship')
    }
  }
}

export interface MakeFriendshipUCInput {
  token: string,
  friendId: string
}

export interface MakeFriendshipUCOutput {
  message: string
}