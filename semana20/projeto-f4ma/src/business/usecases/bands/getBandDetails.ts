import { BandGateway } from "../../gateways/band";
import { Band } from "../../entities/band";

export class GetBandDetailsUC {
  constructor(
    private db: BandGateway, 
  ) {}

  private verifyInput(input: string): boolean {
    return input !== undefined && input !== null && input !== ''
  }

  public async execute(input:GetBandDetailsUCInput): Promise<GetBandDetailsUCOutput | undefined> {
    try{
      const hasIdInput = this.verifyInput(input.id)
      const hasNameInput = this.verifyInput(input.name)

      if(
        !hasNameInput &&
        !hasIdInput
      ) {
        throw new Error('Missing Input')
      }

      let bandDetails: Band | undefined

      if(hasNameInput) {
        bandDetails = await this.db.getBandByName(input.name)
      } else if(hasIdInput) {
        bandDetails = await this.db.getBandById(input.id)
      }

      if(!bandDetails) {
        throw new Error("Band not found, insert a registered band")
      }

      return {
        bandInfo: bandDetails
      }
    }catch(err){
      throw new Error("An error occurred while trying to get details of this band")
    }
  }
}

export interface GetBandDetailsUCInput {
  id: string
  name: string
}

export interface GetBandDetailsUCOutput {
  bandInfo: Band
} 