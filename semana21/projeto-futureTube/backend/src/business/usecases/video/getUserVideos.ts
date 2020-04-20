import { v4 } from "uuid";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { VideoGateway } from "../../gateways/videoGateway";
import { Video } from "../../entities/video";
import { NotFoundError } from "../../errors/notFoundError";


export class GetUserVideosUC {
  constructor(
    private db: VideoGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: GetUserVideosUCInput): Promise<GetUserVideosUCOutput | undefined>{
    try{
      const id = v4();

      this.validators.validateGetUserVideoInput(input)

      let userVideos: Video[] | undefined

      if(input.id) {
        userVideos = await this.db.getUserVideos(input.id)
      } else {
        const userId = this.jwtAuth.verifyToken(input.token)
        userVideos = await this.db.getUserVideos(userId)
      }

      if(userVideos.length === 0) {
        throw new NotFoundError("This user has no videos")
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
  id: string
}

export interface GetUserVideosUCOutput {
  userVideos: Video[]
}