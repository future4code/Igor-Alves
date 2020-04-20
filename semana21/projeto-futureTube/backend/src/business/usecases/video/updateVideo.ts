import { v4 } from "uuid";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { VideoGateway } from "../../gateways/videoGateway";


export class UpdateVideoUC {
  constructor(
    private db: VideoGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: UpdateVideoUCInput): Promise<UpdateVideoUCOutput | undefined>{
    try{
      const id = v4();

      this.validators.validateUpdateVideoInput(input)

      this.jwtAuth.verifyToken(input.token)
      
      if(input.title) {
        this.db.updateTitle(input.title, input.videoId)
      }

      if(input.description) {
        this.db.updateDescription(input.description, input.videoId)
      }
            
      return {
        message:"Video successfully updated"
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during the updating video'
      }
    }
  }
}

export interface UpdateVideoUCInput {
  token: string
  videoId: string
  title: string
  description: string
}

export interface UpdateVideoUCOutput {
  message: string
}