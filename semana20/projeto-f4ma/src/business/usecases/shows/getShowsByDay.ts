import { ShowGateway } from "../../gateways/show"
import { ShowWithBand, toShowWeekDay, Show } from "../../entities/show"


export class GetShowsByDayUC {
  constructor(
    private db: ShowGateway, 
  ) {}

  private verifyInput(input: string): boolean {
    return input !== undefined && input !== null && input !== ''
  }

  public async execute(input:GetShowsByDayUCInput): Promise<GetShowsByDayUCOutput[] | undefined> {
    try{
      const hasWeekDateInput = this.verifyInput(input.weekDate)

      if(!hasWeekDateInput) {
        throw new Error('Missing Input')
      }

      const weekDate = toShowWeekDay(input.weekDate)

      const allShowsOfDate = await this.db.getShowsByDay(weekDate)

      const bandsOfDay = allShowsOfDate.map((show: any) => {
        return {
          bandName: show.band.name,
          musicGenre: show.band.musicGenre
        }
      })

      return bandsOfDay
    }catch(err){
      console.log(err)
      throw new Error("An error occurred while trying to get shows of this day")
    }
  }
}

export interface GetShowsByDayUCInput {
  weekDate: string
}

export interface GetShowsByDayUCOutput {
  bandName: string
  musicGenre: string
} 