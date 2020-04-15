import { Request, Response } from "express";
import { FeedDB } from "../../../data/feedDB";
import { GetFeedUC} from "../../../business/usecases/feed/getFeed";
import { JWTAutentication } from "../../../utils/jwtAutentication";


export const getFeedEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetFeedUC(new FeedDB(), new JWTAutentication());
    
    const result = await uc.execute({
      token: req.headers.auth as string,
      page: req.body.page
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      errorMessage: err.message
    });
  }
};