import { BaseDatabase } from "./baseDatabase";
import {
  Show,
  ShowWithBand,
  toShowWeekDay,
  ShowWeekDay
} from "../business/entities/show";
import { Band } from "../business/entities/band";
import { ShowGateway } from "../business/gateways/show";

export class ShowDatabase extends BaseDatabase implements ShowGateway {
  private showTableName: string = "shows";
  private foreignBandTableName: string = "bands";

  public fromDB(dbModel?: any): Show | undefined {
    return (
      dbModel &&
      new Show(
        dbModel.id,
        toShowWeekDay(dbModel.week_day),
        dbModel.start_time,
        dbModel.end_time,
        dbModel.band_id
      )
    );
  }

  public fromDBWithBand(dbModel?: any): ShowWithBand | undefined {
    return (
      dbModel &&
      new ShowWithBand(
        dbModel.id,
        toShowWeekDay(dbModel.week_day),
        dbModel.start_time,
        dbModel.end_time,
        new Band(
          dbModel.band_id,
          dbModel.name,
          dbModel.music_genre,
          dbModel.responsible
        )
      )
    );
  }

  public async createShow(show: Show): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${
        this.showTableName
      } (id, week_day, start_time, end_time, band_id)
      VALUES(
        '${show.getId()}',
        '${show.getWeekDate()}',
        '${show.getStartTime()}',
        '${show.getEndTime()}',
        '${show.getBandId()}'
      )
  `);
  }

  public async getShowWithBandByTimeRange(
    startTime: number,
    endTime: number,
    weekDay: ShowWeekDay
  ): Promise<ShowWithBand[]> {
    const result = await this.connection.raw(`
      SELECT s.*, b.name, b.music_genre, b.responsible FROM ${this.showTableName} s 
      LEFT JOIN ${this.foreignBandTableName} b ON b.id = s.band_id 
      WHERE 
        week_day = '${weekDay}' AND
        ((s.start_time <= ${startTime} AND s.end_time > ${startTime}) OR
        (s.start_time < ${endTime} AND s.end_time >= ${endTime}))
    `);

    return result[0].map(this.fromDBWithBand);
  }

  public async getShowsByDay(day: ShowWeekDay): Promise<ShowWithBand[]> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.showTableName} s
      LEFT JOIN ${this.foreignBandTableName} b ON b.id = s.band_id
      WHERE s.week_day = '${day}'
      ORDER BY start_time
    `);

    return result[0].map(this.fromDBWithBand);
  }
}
