import { FriendGateway } from "../../gateways/friendGateway"
import { JWTAutentication } from "../../../utils/jwtAutentication";


export class UndoFriendshipUC {
  constructor(private db: FriendGateway) {}
  
  public async execute(input: UndoFriendshipUCInput): Promise<UndoFriendshipUCOutput | undefined>{
    if(!input.token) {
      throw new Error("O Usuário precisa estar logado para fazer uma amizade.")
    }

    const jwtAuth = new JWTAutentication()

    const userId = jwtAuth.verifyToken(input.token as string) 

    const areFriends = await this.db.verifyFriendship(userId, input.friendId)

    if(!areFriends) {
      throw new Error("Para desfazer uma amizade é necessário ser amigo do usuário.")
    }

    await this.db.undoFriendship(userId, input.friendId)

    await this.db.undoFriendship(input.friendId, userId)

    return {
      message: "Amizade desfeita."
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