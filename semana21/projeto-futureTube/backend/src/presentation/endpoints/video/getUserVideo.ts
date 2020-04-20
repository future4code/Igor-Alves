import { Request, Response } from "express";
import { JWTAutentication } from "../../../utils/jwtAutentication";
import { Validators } from "../../../utils/validators";
import { VideoDatabase } from "../../../data/videoDatabase";
import { GetUserVideosUC } from "../../../business/usecases/video/getUserVideos";

export const getUserVideosEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetUserVideosUC(
      new VideoDatabase(),
      new JWTAutentication(),
      new Validators()
    );

    const result = await uc.execute({
      token: (req.headers.Authorization || req.headers.authorization) as string,
      id: req.query ? req.query.id as string : '',
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err,
    });
  }
};
