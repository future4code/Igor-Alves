import { v4 } from "uuid";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { VideoGateway } from "../../gateways/videoGateway";
import { Video } from "../../entities/video";


export class UploadVideoUC {
  constructor(
    private db: VideoGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: SignupUCInput): Promise<SignupUCOutput | undefined>{
    try{
      const id = v4();

      this.validators.validateUpdateVideoInput(input)

      const userId = this.jwtAuth.verifyToken(input.token)

      const creationTimestamp = new Date().getTime()

      const newVideo = new Video(
        id,
        input.url,
        input.thumbnail,
        input.title,
        input.description,
        creationTimestamp,
        userId
      )
  
      await this.db.uploadVideo(newVideo);
            
      return {
        message:"Video successfully created"
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during the video creation'
      }
    }
  }
}

export interface SignupUCInput {
  token: string
  url: string
  thumbnail: string
  title: string
  description: string
}

export interface SignupUCOutput {
  message: string
}