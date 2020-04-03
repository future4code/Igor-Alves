import { Request, Response } from "express";
import { GetShowsByDayUC } from "../../../business/usecases/shows/getShowsByDay";
import { ShowDatabase } from "../../../data/showDatabase";


export const getShowsByDayEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetShowsByDayUC(new ShowDatabase());

    const result = await uc.execute({
      weekDate: req.body.weekDate
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      errorMessage: err.message
    });
  }
}; 