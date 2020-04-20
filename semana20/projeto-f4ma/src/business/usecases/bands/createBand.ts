import { v4 } from "uuid";
import { BandGateway } from "../../gateways/band";
import { Band } from "../../entities/band";

export class CreateBandUC {
  constructor(
    private db: BandGateway, 
  ) {}

  private verifyInput(input: string): boolean {
    return input !== undefined && input !== null && input !== ''
  }

  public async execute(input:CreateBandUCInput): Promise<CreateBandUCOutput | undefined> {
    try{
      const id = v4();

      const hasNameInput = this.verifyInput(input.name)
      const hasMusicGenreInput = this.verifyInput(input.musicGenre)
      const hasResponsibleInput = this.verifyInput(input.responsible)

      if(
        !hasNameInput ||
        !hasMusicGenreInput || 
        !hasResponsibleInput
      ) {
        throw new Error('Missing Input')
      }

      const verifyRegisteredBand = await this.db.getBandByName(input.name)

      if(verifyRegisteredBand) {
        throw new Error('Band already registered')
      }

      const newBand = new Band(
        id,
        input.name,
        input.musicGenre,
        input.responsible
      );

      await this.db.createBand(newBand);

      return {
        message:"Band created successfully",
      }
    }catch(err){
      throw new Error("An error occurred while trying to create a band")
    }
  }
}

export interface CreateBandUCInput {
  name: string
  musicGenre: string
  responsible: string
}

export interface CreateBandUCOutput {
  message: string
} 