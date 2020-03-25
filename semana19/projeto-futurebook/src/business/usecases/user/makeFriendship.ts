import { FriendGateway } from "../../gateways/friendGateway"
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";


export class MakeFriendshipUC {
  constructor(private db: FriendGateway, private jwtAuth: JWTAutenticationGateway) {}
  
  public async execute(input: MakeFriendshipUCInput): Promise<MakeFriendshipUCOutput | undefined> {
    if(!input.token) {
      throw new Error("O Usuário precisa estar logado para fazer uma amizade.")
    }

    const userId = this.jwtAuth.verifyToken(input.token as string) 

    await this.db.createFriendship(userId, input.friendId)

    await this.db.createFriendship(input.friendId, userId)

    return {
      message: "Agora vocês são amigos."
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