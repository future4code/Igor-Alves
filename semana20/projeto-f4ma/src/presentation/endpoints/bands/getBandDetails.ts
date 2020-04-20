import { Request, Response } from "express";
import { BandDatabase } from "../../../data/bandDatabase";
import { GetBandDetailsUC } from "../../../business/usecases/bands/getBandDetails";


export const getBandDetailsEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetBandDetailsUC(new BandDatabase());

    const result = await uc.execute({
      id: req.body.id,
      name: req.body.name
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      errorMessage: err.message
    });
  }
}; 