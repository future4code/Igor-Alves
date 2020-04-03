import { v4 } from "uuid";
import { ShowGateway } from "../../gateways/show";
import { Show, toShowWeekDay } from "../../entities/show";


export class CreateShowUC {
  constructor(
    private db: ShowGateway, 
  ) {}

  private verifyInput(input: string | number): boolean {
    return input !== undefined && input !== null && input !== ''
  }

  private validateShowHour(start: number, end: number): boolean {
    if(start >= 8 && start <= 23 && end <= 23 && end >= 8) {
      return true
    } else if(start < end) {
      return true
    } else if(Number.isInteger(start) && Number.isInteger(end)) {
      return true
    }

    return false
  }

  public async execute(input:CreateShowUCInput): Promise<CreateShowUCOutput | undefined> {
    try{
      const id = v4();

      const hasWeekDateInput = this.verifyInput(input.weekDate)
      const hasStartTimeInput = this.verifyInput(input.startTime)
      const hasEndTimeInput = this.verifyInput(input.endTime)
      const hasBandIdInput = this.verifyInput(input.bandId)

      if(
        !hasWeekDateInput ||
        !hasStartTimeInput || 
        !hasEndTimeInput ||
        !hasBandIdInput
      ) {
        throw new Error('Missing Input')
      }

      const start = Number(input.startTime)
      const end = Number(input.endTime)

      const isValidTime =  this.validateShowHour(start, end)

      if(!isValidTime) {
        throw new Error('Invalid show time')
      }

      const weekDate = toShowWeekDay(input.weekDate)

      const hasThisHourAvailable = await this.db.getShowWithBandByTimeRange(start, end, weekDate)

      if( hasThisHourAvailable.length !== 0) {
        throw new Error("This time is not available")
      }

      const newShow = new Show(
        id,
        toShowWeekDay(input.weekDate),
        input.startTime,
        input.endTime,
        input.bandId
      );

      await this.db.createShow(newShow);

      return {
        message:"Show created successfully",
      }
    }catch(err){
      throw new Error("An error occurred while trying to create a show")
    }
  }
}

export interface CreateShowUCInput {
  weekDate: string
  startTime: number
  endTime: number
  bandId: string
}

export interface CreateShowUCOutput {
  message: string
} 