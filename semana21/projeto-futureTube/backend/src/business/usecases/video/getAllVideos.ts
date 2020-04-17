import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { VideoGateway } from "../../gateways/videoGateway";
import { VideoWithUser } from "../../entities/video";


export class GetAllVideosUC {
  constructor(
    private db: VideoGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private validators: ValidatorsGateway
  ) {}

  private POSTS_PER_PAGE = 10;

  public async execute(input: GetAllVideosUCInput): Promise<GetAllVideosUCOutput | undefined> {
    try{
      this.validators.validateGetAllVideosInput(input)

      this.jwtAuth.verifyToken(input.token)

      let page = input.page >= 1 ? input.page : 1;

      const offset = this.POSTS_PER_PAGE * (page - 1);

      const allVideos = await this.db.getAllVideos(this.POSTS_PER_PAGE, offset)
    
      return {
        allVideos: allVideos
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during the getting all the videos'
      }
    }
  }
}

export interface GetAllVideosUCInput {
  token: string
  page: number
}

export interface GetAllVideosUCOutput {
  allVideos: VideoWithUser[]
}