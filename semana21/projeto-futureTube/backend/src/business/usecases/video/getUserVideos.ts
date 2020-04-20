import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { VideoGateway } from "../../gateways/videoGateway";
import { Video } from "../../entities/video";


export class GetUserVideosUC {
  constructor(
    private db: VideoGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: GetUserVideosUCInput): Promise<GetUserVideosUCOutput>{
    try{
      this.validators.validateGetUserVideoInput(input)

      let userVideos: Video[]

      if(input.id) {
        userVideos = await this.db.getUserVideos(input.id)
      } else {
        const userId = this.jwtAuth.verifyToken(input.token)
        userVideos = await this.db.getUserVideos(userId)
      }
    
      return {
        userVideos: userVideos
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during the getting videos of user'
      }
    }
  }
}

export interface GetUserVideosUCInput {
  token: string
  id?: string
}

export interface GetUserVideosUCOutput {
  userVideos: Video[]
}