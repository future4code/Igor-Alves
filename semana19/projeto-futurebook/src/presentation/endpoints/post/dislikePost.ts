import { Request, Response } from "express";
import { PostDB } from "../../../data/postDB";
import { JWTAutentication } from "../../../utils/jwtAutentication";
import { FeedDB } from "../../../data/feedDB";
import { DislikePostUC } from "../../../business/usecases/post/dislikePost";


export const dislikePostEndpoint = async (req: Request, res: Response) => {
  try {
    const dislikePostUC = new DislikePostUC(new PostDB(), new FeedDB(), new JWTAutentication());

    const result = await dislikePostUC.execute({
      token: req.headers.auth as string,
      postId: req.body.postId,
    });
    
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};