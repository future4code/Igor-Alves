import { Request, Response } from "express";
import { FeedDB } from "../../../data/feedDB";
import { JWTAutentication } from "../../../utils/jwtAutentication";
import { GetFeedByTypeUC } from "../../../business/usecases/feed/getFeedByType";


export const getFeedByTypeEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetFeedByTypeUC(new FeedDB(), new JWTAutentication());
    
    const result = await uc.execute({
      token: req.headers.auth as string,
      type: req.body.type,
      page: req.body.page
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      errorMessage: err.message
    });
  }
};