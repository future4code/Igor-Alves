import { Request, Response } from "express";
import { ShowDatabase } from "../../../data/showDatabase";
import { CreateShowUC } from "../../../business/usecases/shows/createShow";


export const createShowEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new CreateShowUC(new ShowDatabase());

    const result = await uc.execute({
      weekDate: req.body.weekDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      bandId: req.body.bandId
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      errorMessage: err.message
    });
  }
}; 