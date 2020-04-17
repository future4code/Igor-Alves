import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { VideoGateway } from "../../gateways/videoGateway";
import { VideoWithUser } from "../../entities/video";
import { NotFoundError } from "../../errors/notFoundError";


export class GetVideoDetailsUC {
  constructor(
    private db: VideoGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: GetVideoDetailsUCInput): Promise<GetVideoDetailsUCOutput | undefined> {
    try{
      this.validators.validateGetVideoDetailsInput(input)

      this.jwtAuth.verifyToken(input.token)

      const videoDetails = await this.db.getVideoDetails(input.videoId)
      
      if(!videoDetails) {
        throw new NotFoundError('Video not found')
      }

      return {
        videoDetails: videoDetails
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during the getting video details'
      }
    }
  }
}

export interface GetVideoDetailsUCInput {
  token: string
  videoId: string
}

export interface GetVideoDetailsUCOutput {
  videoDetails: VideoWithUser
}