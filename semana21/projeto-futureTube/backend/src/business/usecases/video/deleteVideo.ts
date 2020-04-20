import { v4 } from "uuid";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { VideoGateway } from "../../gateways/videoGateway";


export class DeleteVideoUC {
  constructor(
    private db: VideoGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: DeleteVideoUCInput): Promise<DeleteVideoUCOutput | undefined>{
    try{
      const id = v4();

      this.validators.validateDeleteVideoInput(input)

      const userId = this.jwtAuth.verifyToken(input.token)
      
      this.db.deleteVideo(input.videoId)
            
      return {
        message:"Video successfully deleted"
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred while trying to delete the video'
      }
    }
  }
}

export interface DeleteVideoUCInput {
  token: string
  videoId: string
}

export interface DeleteVideoUCOutput {
  message: string
}